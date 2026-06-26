<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'email' => ['nullable', 'email'],
            'pickup_city' => ['required', 'string'],
            'pickup_address' => ['required', 'string'],
            'delivery_city' => ['required', 'string'],
            'delivery_address' => ['required', 'string'],
            'goods_type' => ['required', 'string'],
            'estimated_weight' => ['required', 'numeric', 'min:1'],
            'truck_type' => ['nullable', 'string'],
            'loading_option' => ['nullable', 'string'],
            'urgency' => ['nullable', 'string'],
            'preferred_date' => ['nullable', 'date'],
            'preferred_time' => ['nullable', 'string'],
            'payment_method' => ['nullable', 'string'],
            'message' => ['nullable', 'string'],
        ];
    }
}
