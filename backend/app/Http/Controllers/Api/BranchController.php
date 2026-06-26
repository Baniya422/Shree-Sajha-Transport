<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BranchResource;
use App\Models\Branch;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BranchController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return BranchResource::collection(
            Branch::query()->where('is_active', true)->orderBy('city')->get()
        );
    }

    public function adminIndex(): AnonymousResourceCollection
    {
        return BranchResource::collection(Branch::query()->orderBy('city')->get());
    }

    public function adminStore(Request $request): BranchResource
    {
        $branch = Branch::query()->create($this->validatedBranch($request));

        return new BranchResource($branch);
    }

    public function adminUpdate(Request $request, Branch $branch): BranchResource
    {
        $branch->update($this->validatedBranch($request, false));

        return new BranchResource($branch->fresh());
    }

    public function adminDestroy(Branch $branch): JsonResponse
    {
        $branch->delete();

        return response()->json([
            'message' => 'Branch deleted successfully',
        ]);
    }

    private function validatedBranch(Request $request, bool $required = true): array
    {
        $presence = $required ? 'required' : 'sometimes';

        return $request->validate([
            'branch_name' => [$presence, 'string'],
            'city' => [$presence, 'string'],
            'address' => [$presence, 'string'],
            'latitude' => ['nullable', 'numeric'],
            'longitude' => ['nullable', 'numeric'],
            'phone' => ['nullable', 'string'],
            'email' => ['nullable', 'email'],
            'coverage_areas' => [$presence, 'array'],
            'coverage_areas.*' => ['string'],
            'is_active' => ['sometimes', 'boolean'],
        ]);
    }
}
