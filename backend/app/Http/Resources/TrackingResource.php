<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrackingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tracking_id' => $this->tracking_id,
            'booking_id' => $this->booking_id,
            'current_status' => $this->current_status,
            'customer_name' => $this->customer_name,
            'phone' => $this->phone,
            'pickup_location' => $this->pickup_location,
            'delivery_location' => $this->delivery_location,
            'updates' => $this->whenLoaded('updates', function () {
                return $this->updates->map(fn ($update) => [
                    'id' => $update->id,
                    'title' => $update->title,
                    'description' => $update->description,
                    'status' => $update->status,
                    'completed' => $update->completed,
                    'updated_by' => $update->updated_by,
                    'created_at' => $update->created_at,
                    'updated_at' => $update->updated_at,
                ]);
            }),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
