<?php

namespace App\Services;

use Illuminate\Support\Str;

class PricingService
{
    private array $rates = [
        'base_charge' => 1500,
        'per_km' => 60,
        'per_kg' => 8,
        'truck_type' => [
            'mini_truck' => 0,
            'medium_truck' => 2500,
            'large_truck' => 5000,
        ],
        'loading' => [
            'self' => 0,
            'staff_loading' => 1200,
            'staff_loading_unloading' => 2200,
        ],
        'urgency' => [
            'normal' => 0,
            'urgent' => 1500,
            'same_day' => 3000,
        ],
    ];

    public function calculate(array $data): array
    {
        $distance = (float) ($data['estimated_distance'] ?? 0);
        $weight = (float) ($data['estimated_weight'] ?? $data['weight'] ?? 0);
        $truckType = $this->normalizeKey($data['truck_type'] ?? 'mini_truck');
        $loadingOption = $this->normalizeKey($data['loading_option'] ?? 'self');
        $urgency = $this->normalizeKey($data['urgency'] ?? 'normal');

        $baseCharge = $this->rates['base_charge'];
        $distanceCharge = $distance * $this->rates['per_km'];
        $weightCharge = $weight * $this->rates['per_kg'];
        $truckTypeCharge = $this->rates['truck_type'][$truckType] ?? 0;
        $loadingCharge = $this->rates['loading'][$loadingOption] ?? 0;
        $riskCharge = $this->calculateRiskCharge($data['goods_type'] ?? '');
        $urgencyCharge = $this->rates['urgency'][$urgency] ?? 0;

        return [
            'estimated_distance' => $distance ?: null,
            'base_charge' => $baseCharge,
            'distance_charge' => $distanceCharge,
            'weight_charge' => $weightCharge,
            'truck_type_charge' => $truckTypeCharge,
            'loading_charge' => $loadingCharge,
            'risk_charge' => $riskCharge,
            'urgency_charge' => $urgencyCharge,
            'total_estimated_cost' => $baseCharge
                + $distanceCharge
                + $weightCharge
                + $truckTypeCharge
                + $loadingCharge
                + $riskCharge
                + $urgencyCharge,
        ];
    }

    private function normalizeKey(string $value): string
    {
        return Str::of($value)->lower()->replace([' ', '-'], '_')->toString();
    }

    private function calculateRiskCharge(string $goodsType): float
    {
        $normalizedGoods = Str::of($goodsType)->lower()->toString();

        return Str::contains($normalizedGoods, ['fragile', 'glass', 'electronics', 'valuable']) ? 1000 : 0;
    }
}
