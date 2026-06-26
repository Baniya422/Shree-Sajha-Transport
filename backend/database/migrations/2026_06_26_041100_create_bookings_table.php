<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('booking_code')->unique();
            $table->string('full_name');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->string('pickup_city');
            $table->string('pickup_address');
            $table->decimal('pickup_lat', 10, 7)->nullable();
            $table->decimal('pickup_lng', 10, 7)->nullable();
            $table->string('delivery_city');
            $table->string('delivery_address');
            $table->decimal('delivery_lat', 10, 7)->nullable();
            $table->decimal('delivery_lng', 10, 7)->nullable();
            $table->foreignId('nearest_branch_id')->nullable()->constrained('branches')->nullOnDelete();
            $table->string('nearest_branch_name')->nullable();
            $table->string('goods_type');
            $table->decimal('estimated_weight', 10, 2);
            $table->string('truck_type')->nullable();
            $table->string('loading_option')->nullable();
            $table->string('urgency')->nullable();
            $table->date('preferred_date')->nullable();
            $table->string('preferred_time')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('payment_status')->default('Unpaid');
            $table->decimal('estimated_distance', 10, 2)->nullable();
            $table->decimal('base_charge', 12, 2)->nullable();
            $table->decimal('distance_charge', 12, 2)->nullable();
            $table->decimal('weight_charge', 12, 2)->nullable();
            $table->decimal('truck_type_charge', 12, 2)->nullable();
            $table->decimal('loading_charge', 12, 2)->nullable();
            $table->decimal('risk_charge', 12, 2)->nullable();
            $table->decimal('urgency_charge', 12, 2)->nullable();
            $table->decimal('total_estimated_cost', 12, 2)->nullable();
            $table->decimal('final_cost', 12, 2)->nullable();
            $table->string('status')->default('Pending');
            $table->string('tracking_id')->nullable()->index();
            $table->text('message')->nullable();
            $table->text('admin_notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
