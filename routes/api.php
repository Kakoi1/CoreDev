<?php

use App\Http\Controllers\api\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/clients/{type}', [ClientController::class, 'index']);
Route::get('/hardware/{category}', [ClientController::class, 'hardware']);
Route::get('/cloud/{category}', [ClientController::class, 'cloud']);
Route::get('/Client-Logo', [ClientController::class, 'homeLogo']);
Route::post('/send-email', [ClientController::class, 'email']);
Route::middleware('web')->get('/csrf-token', function () {
    return response()->json([
        'csrf_token' => csrf_token()
    ]);
});