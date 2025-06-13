<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CloudTableSeeder extends Seeder
{
    public function run()
    {
        $cloudSolutionsData = [
          [
            'name' => 'AWS CLOUD SERVICES',
            'description' => 'Amazon Web Services has been providing world-leading cloud technologies that help any organization and any individual build solutions to transform industries, communities, and lives for the better. Whether they are entrepreneurs launching new businesses, established companies reinventing themselves, non-profits working to advance their missions, or governments and cities seeking to serve their citizens more effectively—our customers trust AWS with their livelihoods, their goals, their ideas, and their data.',
            'category' => 'cloud',
            'image' => 'cl1.png',
            'created_at' => null,
            'updated_at' => null,
        ],
        [
            'name' => 'AWS Architecture for hosting Web Applications',
            'description' => 'Taking a closer look at how to architect an infrastructure on AWS to host Web Applications',
            'category' => 'cloud',
            'image' => 'cl2.png',
            'created_at' => null,
            'updated_at' => null,
        ],
        [
          'name' => 'AWS Architecture for hosting Web Applications',
          'description' => 'Taking a closer look at how to architect an infrastructure on AWS to host Web Applications',
          'category' => 'cloud',
          'image' => 'cl2.png',
          'created_at' => null,
          'updated_at' => null,
      ],
        ];

        foreach ($cloudSolutionsData as $data) {
            DB::table('cloud_solutions')->insert($data);
        }
    }
}