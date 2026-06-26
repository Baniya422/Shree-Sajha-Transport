<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrackingUpdate extends Model
{
    use HasFactory;

    protected $fillable = [
        'tracking_record_id',
        'title',
        'description',
        'status',
        'completed',
        'updated_by',
    ];

    protected function casts(): array
    {
        return [
            'completed' => 'boolean',
        ];
    }

    public function trackingRecord(): BelongsTo
    {
        return $this->belongsTo(TrackingRecord::class);
    }
}
