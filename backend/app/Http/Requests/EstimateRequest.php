<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EstimateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'pickup_city' => ['required', 'string'],
            'delivery_city' => ['required', 'string'],
            'goods_type' => ['required', 'string'],
            'weight' => ['required', 'numeric', 'min:1'],
            'truck_type' => ['nullable', 'string'],
            'loading_option' => ['nullable', 'string'],
            'urgency' => ['nullable', 'string'],
            'name' => ['nullable', 'string'],
            'phone' => ['nullable', 'string'],
        ];
    }
}
