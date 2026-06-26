<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('estimates', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            $table->string('pickup_city');
            $table->string('delivery_city');
            $table->string('goods_type');
            $table->decimal('weight', 10, 2);
            $table->string('truck_type')->nullable();
            $table->string('loading_option')->nullable();
            $table->string('urgency')->nullable();
            $table->decimal('estimated_distance', 10, 2)->nullable();
            $table->decimal('total_estimated_cost', 12, 2)->nullable();
            $table->string('status')->default('New');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('estimates');
    }
};
