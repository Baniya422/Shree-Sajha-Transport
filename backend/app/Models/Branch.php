<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_name',
        'city',
        'address',
        'latitude',
        'longitude',
        'phone',
        'email',
        'coverage_areas',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'coverage_areas' => 'array',
            'is_active' => 'boolean',
            'latitude' => 'decimal:7',
            'longitude' => 'decimal:7',
        ];
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class, 'nearest_branch_id');
    }
}
