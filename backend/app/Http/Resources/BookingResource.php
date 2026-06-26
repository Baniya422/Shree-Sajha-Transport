<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'booking_code' => $this->booking_code,
            'full_name' => $this->full_name,
            'phone' => $this->phone,
            'email' => $this->email,
            'pickup_city' => $this->pickup_city,
            'pickup_address' => $this->pickup_address,
            'delivery_city' => $this->delivery_city,
            'delivery_address' => $this->delivery_address,
            'nearest_branch_id' => $this->nearest_branch_id,
            'nearest_branch_name' => $this->nearest_branch_name,
            'goods_type' => $this->goods_type,
            'estimated_weight' => $this->estimated_weight,
            'truck_type' => $this->truck_type,
            'loading_option' => $this->loading_option,
            'urgency' => $this->urgency,
            'preferred_date' => $this->preferred_date,
            'preferred_time' => $this->preferred_time,
            'payment_method' => $this->payment_method,
            'payment_status' => $this->payment_status,
            'estimated_distance' => $this->estimated_distance,
            'base_charge' => $this->base_charge,
            'distance_charge' => $this->distance_charge,
            'weight_charge' => $this->weight_charge,
            'truck_type_charge' => $this->truck_type_charge,
            'loading_charge' => $this->loading_charge,
            'risk_charge' => $this->risk_charge,
            'urgency_charge' => $this->urgency_charge,
            'total_estimated_cost' => $this->total_estimated_cost,
            'final_cost' => $this->final_cost,
            'status' => $this->status,
            'tracking_id' => $this->tracking_id,
            'message' => $this->message,
            'admin_notes' => $this->admin_notes,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
