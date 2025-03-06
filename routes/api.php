<?php

use App\Http\Controllers\api\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/clients/{type}', [ClientController::class, 'index']);
Route::get('/hardware/{category}', [ClientController::class, 'hardware']);