<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_code',
        'full_name',
        'phone',
        'email',
        'pickup_city',
        'pickup_address',
        'pickup_lat',
        'pickup_lng',
        'delivery_city',
        'delivery_address',
        'delivery_lat',
        'delivery_lng',
        'nearest_branch_id',
        'nearest_branch_name',
        'goods_type',
        'estimated_weight',
        'truck_type',
        'loading_option',
        'urgency',
        'preferred_date',
        'preferred_time',
        'payment_method',
        'payment_status',
        'estimated_distance',
        'base_charge',
        'distance_charge',
        'weight_charge',
        'truck_type_charge',
        'loading_charge',
        'risk_charge',
        'urgency_charge',
        'total_estimated_cost',
        'final_cost',
        'status',
        'tracking_id',
        'message',
        'admin_notes',
    ];

    protected function casts(): array
    {
        return [
            'preferred_date' => 'date',
            'pickup_lat' => 'decimal:7',
            'pickup_lng' => 'decimal:7',
            'delivery_lat' => 'decimal:7',
            'delivery_lng' => 'decimal:7',
            'estimated_weight' => 'decimal:2',
            'estimated_distance' => 'decimal:2',
            'base_charge' => 'decimal:2',
            'distance_charge' => 'decimal:2',
            'weight_charge' => 'decimal:2',
            'truck_type_charge' => 'decimal:2',
            'loading_charge' => 'decimal:2',
            'risk_charge' => 'decimal:2',
            'urgency_charge' => 'decimal:2',
            'total_estimated_cost' => 'decimal:2',
            'final_cost' => 'decimal:2',
        ];
    }

    public function nearestBranch(): BelongsTo
    {
        return $this->belongsTo(Branch::class, 'nearest_branch_id');
    }

    public function trackingRecord(): HasOne
    {
        return $this->hasOne(TrackingRecord::class);
    }
}
