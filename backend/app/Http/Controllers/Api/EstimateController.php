<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EstimateRequest;
use App\Models\Estimate;
use App\Services\PricingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EstimateController extends Controller
{
    public function store(EstimateRequest $request, PricingService $pricingService): JsonResponse
    {
        $validated = $request->validated();
        $pricing = $pricingService->calculate($validated);

        $estimate = Estimate::query()->create(array_merge($validated, [
            'estimated_distance' => $pricing['estimated_distance'],
            'total_estimated_cost' => $pricing['total_estimated_cost'],
        ]));

        return response()->json([
            'message' => 'Estimate created successfully',
            'data' => $estimate,
            'pricing_breakdown' => $pricing,
        ], 201);
    }

    public function adminIndex(): JsonResponse
    {
        return response()->json(Estimate::query()->latest()->paginate(20));
    }

    public function adminUpdate(Request $request, Estimate $estimate): JsonResponse
    {
        $estimate->update($request->only(['status', 'total_estimated_cost']));

        return response()->json([
            'message' => 'Estimate updated successfully',
            'data' => $estimate->fresh(),
        ]);
    }

    public function adminDestroy(Estimate $estimate): JsonResponse
    {
        $estimate->delete();

        return response()->json([
            'message' => 'Estimate deleted successfully',
        ]);
    }
}
