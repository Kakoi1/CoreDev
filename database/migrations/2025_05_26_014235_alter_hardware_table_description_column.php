<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('hardware', function (Blueprint $table) {
            $table->longText('description')->change();
        });
    }

    public function down()
    {
        Schema::table('hardware', function (Blueprint $table) {
            $table->string('description', 255)->change();
        });
    }
};