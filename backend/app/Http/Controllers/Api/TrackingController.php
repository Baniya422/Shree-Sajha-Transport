<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrackingResource;
use App\Models\TrackingRecord;
use App\Services\TrackingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TrackingController extends Controller
{
    public function show(string $trackingId): TrackingResource|JsonResponse
    {
        $record = TrackingRecord::query()
            ->with('updates')
            ->where('tracking_id', $trackingId)
            ->first();

        if (! $record) {
            return response()->json([
                'message' => 'Tracking record not found',
            ], 404);
        }

        return new TrackingResource($record);
    }

    public function adminIndex(): AnonymousResourceCollection
    {
        return TrackingResource::collection(
            TrackingRecord::query()->with('updates')->latest()->paginate(20)
        );
    }

    public function adminStore(Request $request, TrackingService $trackingService): TrackingResource
    {
        $validated = $request->validate([
            'tracking_id' => ['nullable', 'string', 'unique:tracking_records,tracking_id'],
            'booking_id' => ['nullable', 'exists:bookings,id'],
            'current_status' => ['required', 'string'],
            'customer_name' => ['nullable', 'string'],
            'phone' => ['nullable', 'string'],
            'pickup_location' => ['nullable', 'string'],
            'delivery_location' => ['nullable', 'string'],
        ]);

        $validated['tracking_id'] = $validated['tracking_id'] ?? $trackingService->generateTrackingId();

        $record = TrackingRecord::query()->create($validated);
        $trackingService->createDefaultTimeline($record);

        return new TrackingResource($record->load('updates'));
    }

    public function adminUpdate(Request $request, TrackingRecord $trackingRecord): TrackingResource
    {
        $trackingRecord->update($request->only([
            'current_status',
            'customer_name',
            'phone',
            'pickup_location',
            'delivery_location',
        ]));

        return new TrackingResource($trackingRecord->fresh()->load('updates'));
    }

    public function adminDestroy(TrackingRecord $trackingRecord): JsonResponse
    {
        $trackingRecord->delete();

        return response()->json([
            'message' => 'Tracking record deleted successfully',
        ]);
    }
}
