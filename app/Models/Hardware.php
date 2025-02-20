<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hardware extends Model
{
    protected $fillable = [
        'name',
        'desciption',
        'category',
        'image',
    ];
}
