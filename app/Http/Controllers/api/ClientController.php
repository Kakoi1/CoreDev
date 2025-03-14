<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Hardware;
use App\Models\Imaged;
use DB;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index($type)
    {
        if ($type == 'All') {
            $clients = Imaged::paginate(10);
            $allClient = Imaged::all();
        } else {
            $clients = Imaged::where('category', $type)->paginate(10);
            $allClient = Imaged::all();
        }

        // Change '5' to the number of items per page
        return response()->json($clients);
    }
    public function hardware($category)
    {
        $hardware = Hardware::where('category', $category)->get();
        return response()->json($hardware);
    }

    public function homeLogo()
    {
        $truncatedLength = 35;
        $logo = Imaged::take(30)  
        ->select('*')
        ->selectRaw('
        CASE
            WHEN LENGTH(name) > ? THEN CONCAT(LEFT(name, ?), "...")
            ELSE name
        END as truncated_name
    ', [$truncatedLength, $truncatedLength])
        ->get();

        return response()->json($logo);
    }
}
