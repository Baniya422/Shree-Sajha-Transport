<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\BranchController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\EstimateController;
use App\Http\Controllers\Api\TrackingController;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'message' => 'Shree Sajha Transport API is running',
    ]);
});

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/bookings', [BookingController::class, 'store']);
Route::post('/contacts', [ContactController::class, 'store']);
Route::post('/estimates', [EstimateController::class, 'store']);
Route::get('/tracking/{trackingId}', [TrackingController::class, 'show']);
Route::get('/branches', [BranchController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);

    Route::get('/admin/dashboard', [DashboardController::class, 'index']);

    Route::get('/admin/bookings', [BookingController::class, 'adminIndex']);
    Route::get('/admin/bookings/{booking}', [BookingController::class, 'adminShow']);
    Route::patch('/admin/bookings/{booking}', [BookingController::class, 'adminUpdate']);
    Route::delete('/admin/bookings/{booking}', [BookingController::class, 'adminDestroy']);

    Route::get('/admin/contacts', [ContactController::class, 'adminIndex']);
    Route::patch('/admin/contacts/{contact}', [ContactController::class, 'adminUpdate']);
    Route::delete('/admin/contacts/{contact}', [ContactController::class, 'adminDestroy']);

    Route::get('/admin/estimates', [EstimateController::class, 'adminIndex']);
    Route::patch('/admin/estimates/{estimate}', [EstimateController::class, 'adminUpdate']);
    Route::delete('/admin/estimates/{estimate}', [EstimateController::class, 'adminDestroy']);

    Route::get('/admin/tracking', [TrackingController::class, 'adminIndex']);
    Route::post('/admin/tracking', [TrackingController::class, 'adminStore']);
    Route::patch('/admin/tracking/{trackingRecord}', [TrackingController::class, 'adminUpdate']);
    Route::delete('/admin/tracking/{trackingRecord}', [TrackingController::class, 'adminDestroy']);

    Route::get('/admin/branches', [BranchController::class, 'adminIndex']);
    Route::post('/admin/branches', [BranchController::class, 'adminStore']);
    Route::patch('/admin/branches/{branch}', [BranchController::class, 'adminUpdate']);
    Route::delete('/admin/branches/{branch}', [BranchController::class, 'adminDestroy']);
});
