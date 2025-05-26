<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateImagedsTable extends Migration
{
    public function up()
    {
        Schema::table('imageds', function (Blueprint $table) {
            $table->string('category')->nullable()->after('image');
        });
    }

    public function down()
    {
        Schema::table('imageds', function (Blueprint $table) {
            $table->dropColumn('category');
        });
    }
}
