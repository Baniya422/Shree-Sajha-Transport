<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'pickup_city',
        'delivery_city',
        'goods_type',
        'weight',
        'truck_type',
        'loading_option',
        'urgency',
        'estimated_distance',
        'total_estimated_cost',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'weight' => 'decimal:2',
            'estimated_distance' => 'decimal:2',
            'total_estimated_cost' => 'decimal:2',
        ];
    }
}
