<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Branch;
use App\Models\Contact;
use App\Models\Estimate;
use App\Models\TrackingRecord;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'bookings_count' => Booking::query()->count(),
            'contacts_count' => Contact::query()->count(),
            'estimates_count' => Estimate::query()->count(),
            'tracking_records_count' => TrackingRecord::query()->count(),
            'branches_count' => Branch::query()->count(),
        ]);
    }
}
