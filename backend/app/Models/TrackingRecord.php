<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TrackingRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'tracking_id',
        'booking_id',
        'current_status',
        'customer_name',
        'phone',
        'pickup_location',
        'delivery_location',
    ];

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class);
    }

    public function updates(): HasMany
    {
        return $this->hasMany(TrackingUpdate::class);
    }
}
