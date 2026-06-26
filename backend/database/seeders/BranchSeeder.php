<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    public function run(): void
    {
        $branches = [
            [
                'branch_name' => 'Kathmandu Office',
                'address' => 'Sano Bharyang, Kathmandu',
                'city' => 'Kathmandu',
                'coverage_areas' => ['Kathmandu', 'Satungal', 'Kalanki', 'Balaju', 'Swayambhu', 'Sano Bharyang', 'Thankot', 'Naikap', 'Gongabu'],
            ],
            [
                'branch_name' => 'Butwal Office',
                'address' => 'Butwal, Nepal',
                'city' => 'Butwal',
                'coverage_areas' => ['Butwal', 'Palpa', 'Gulmi', 'Arghakhanchi', 'Pyuthan', 'Rolpa'],
            ],
            [
                'branch_name' => 'Bhairahawa Office',
                'address' => 'Bhairahawa, Nepal',
                'city' => 'Bhairahawa',
                'coverage_areas' => ['Bhairahawa', 'Kapilvastu', 'Taulihawa', 'Parasi', 'Maheshpur', 'Triveni'],
            ],
        ];

        foreach ($branches as $branch) {
            Branch::query()->updateOrCreate(
                ['branch_name' => $branch['branch_name']],
                array_merge($branch, ['is_active' => true]),
            );
        }
    }
}
