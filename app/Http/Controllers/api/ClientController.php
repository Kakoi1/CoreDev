<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Imaged;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Imaged::paginate(10); // Change '5' to the number of items per page
        return response()->json($clients);
    }
}
