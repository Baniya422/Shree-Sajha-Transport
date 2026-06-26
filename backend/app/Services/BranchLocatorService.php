<?php

namespace App\Services;

use App\Models\Branch;
use Illuminate\Support\Str;

class BranchLocatorService
{
    private array $fallbackCoverage = [
        'Kathmandu Office' => ['satungal', 'kalanki', 'balaju', 'swayambhu', 'sano bharyang', 'thankot', 'naikap', 'gongabu', 'kathmandu'],
        'Butwal Office' => ['butwal', 'palpa', 'gulmi', 'arghakhanchi', 'pyuthan', 'rolpa'],
        'Bhairahawa Office' => ['bhairahawa', 'kapilvastu', 'taulihawa', 'parasi', 'maheshpur', 'triveni'],
    ];

    public function findNearestBranch($pickupCityOrArea, $latitude = null, $longitude = null): ?Branch
    {
        $normalizedArea = Str::of((string) $pickupCityOrArea)->lower()->trim()->toString();

        $branch = Branch::query()
            ->where('is_active', true)
            ->get()
            ->first(function (Branch $branch) use ($normalizedArea) {
                return collect($branch->coverage_areas)
                    ->map(fn ($area) => Str::of((string) $area)->lower()->trim()->toString())
                    ->contains($normalizedArea);
            });

        if ($branch) {
            return $branch;
        }

        foreach ($this->fallbackCoverage as $branchName => $areas) {
            if (in_array($normalizedArea, $areas, true)) {
                return Branch::query()
                    ->where('branch_name', $branchName)
                    ->where('is_active', true)
                    ->first();
            }
        }

        return null;
    }
}
