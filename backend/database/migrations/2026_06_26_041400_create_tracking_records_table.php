<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tracking_records', function (Blueprint $table) {
            $table->id();
            $table->string('tracking_id')->unique();
            $table->foreignId('booking_id')->nullable()->constrained('bookings')->nullOnDelete();
            $table->string('current_status');
            $table->string('customer_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('pickup_location')->nullable();
            $table->string('delivery_location')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tracking_records');
    }
};
