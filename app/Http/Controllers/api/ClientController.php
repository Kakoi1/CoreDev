<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Hardware;
use App\Models\Imaged;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Imaged::paginate(10);
        $allClient = Imaged::all();
        // Change '5' to the number of items per page
        return response()->json(['client' => $clients, 'allclient' => $allClient]);
    }
    public function hardware($category)
    {
        $hardware = Hardware::where('category', $category)->get();
        return response()->json($hardware);
    }
}
