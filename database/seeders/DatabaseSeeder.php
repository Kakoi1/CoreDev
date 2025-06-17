<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            HardwareTableSeeder::class,
            ImagedsTableSeeder::class,
            CloudTableSeeder::class,
            SoftwareTableSeeder::class,
            ImagedsTableSeeder::class,
        ]);
    }
}