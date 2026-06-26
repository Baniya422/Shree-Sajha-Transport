<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\TrackingRecord;
use Illuminate\Support\Str;

class TrackingService
{
    public function generateTrackingId(): string
    {
        do {
            $trackingId = 'SST'.now()->format('ymd').strtoupper(Str::random(6));
        } while (TrackingRecord::query()->where('tracking_id', $trackingId)->exists());

        return $trackingId;
    }

    public function createForBooking(Booking $booking): TrackingRecord
    {
        $record = TrackingRecord::query()->firstOrCreate(
            ['tracking_id' => $booking->tracking_id],
            [
                'booking_id' => $booking->id,
                'current_status' => 'Pending',
                'customer_name' => $booking->full_name,
                'phone' => $booking->phone,
                'pickup_location' => $booking->pickup_city,
                'delivery_location' => $booking->delivery_city,
            ],
        );

        $this->createDefaultTimeline($record);

        return $record;
    }

    public function createDefaultTimeline(TrackingRecord $record): void
    {
        $timeline = [
            ['title' => 'Booking received', 'status' => 'Pending', 'completed' => true],
            ['title' => 'Branch assigned', 'status' => 'Assigned', 'completed' => false],
            ['title' => 'Goods in transit', 'status' => 'In Transit', 'completed' => false],
            ['title' => 'Delivered', 'status' => 'Delivered', 'completed' => false],
        ];

        foreach ($timeline as $item) {
            $record->updates()->firstOrCreate(
                ['title' => $item['title']],
                [
                    'description' => null,
                    'status' => $item['status'],
                    'completed' => $item['completed'],
                ],
            );
        }
    }
}
