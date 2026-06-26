<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Services\BranchLocatorService;
use App\Services\PricingService;
use App\Services\TrackingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Str;

class BookingController extends Controller
{
    public function store(
        BookingRequest $request,
        PricingService $pricingService,
        BranchLocatorService $branchLocatorService,
        TrackingService $trackingService,
    ): BookingResource {
        $validated = $request->validated();
        $nearestBranch = $branchLocatorService->findNearestBranch($validated['pickup_city']);
        $pricing = $pricingService->calculate($validated);

        $booking = Booking::query()->create(array_merge($validated, $pricing, [
            'booking_code' => $this->generateBookingCode(),
            'nearest_branch_id' => $nearestBranch?->id,
            'nearest_branch_name' => $nearestBranch?->branch_name,
            'tracking_id' => $trackingService->generateTrackingId(),
        ]));

        $trackingService->createForBooking($booking);

        return new BookingResource($booking->fresh());
    }

    public function adminIndex(): AnonymousResourceCollection
    {
        return BookingResource::collection(Booking::query()->latest()->paginate(20));
    }

    public function adminShow(Booking $booking): BookingResource
    {
        return new BookingResource($booking);
    }

    public function adminUpdate(Request $request, Booking $booking): BookingResource
    {
        $booking->update($request->only([
            'payment_status',
            'final_cost',
            'status',
            'admin_notes',
        ]));

        return new BookingResource($booking->fresh());
    }

    public function adminDestroy(Booking $booking): JsonResponse
    {
        $booking->delete();

        return response()->json([
            'message' => 'Booking deleted successfully',
        ]);
    }

    private function generateBookingCode(): string
    {
        do {
            $code = 'SST-'.now()->format('Ymd').'-'.strtoupper(Str::random(6));
        } while (Booking::query()->where('booking_code', $code)->exists());

        return $code;
    }
}
