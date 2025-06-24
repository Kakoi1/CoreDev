<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\CoreDevEmail;
use App\Models\Hardware;
use App\Models\Software;
use App\Models\Cloud;
use App\Models\Imaged;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{
    public function index($type)
    {
        if ($type == 'All') {
            $clients = Imaged::paginate(200);
            $allClient = Imaged::all();
        } else {
            $clients = Imaged::where('category', $type)->paginate(200);
            $allClient = Imaged::all();
        }

        // Change '5' to the number of items per page
        return response()->json($clients);
    }
    public function hardware()
    {
        $hardware = Hardware::all();
        return response()->json($hardware);
    }
    
    public function software()
    {
        $software = Software::all();
        return response()->json($software);
    }

    public function cloud()
    {
        $cloud = Cloud::all();
        return response()->json($cloud);
    }

    public function homeLogo()
    {
        $logo = Imaged::take(30)
            ->get();

        return response()->json($logo);
    }
    public function email(Request $request)
    {
        // Validate incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:15',
            'product' => 'required|string',
            'message' => 'required|string',
            'type' => 'required|string',
            'address' => 'required'
        ]);
        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'product' => $validated['product'],
            'message' => $validated['message'],
            'type' => $validated['type'],
            'address' => $validated['address']
        ];

        $type = $validated['type'];

        $recipientEmail = match(strtolower($type)){
            'software' => env('MAIL_SOFTWARE_ADDRESS'),
            'hardware' => env('MAIL_HARDWARE_ADDRESS'),
            'cloud' => env('MAIL_CLOUD_ADDRESS'),
            default => env('MAIL_DEFAULT_ADDRESS')
        };


        Mail::to($recipientEmail)->send(new CoreDevEmail($data));


        // You can return a success response or something else here
        return response()->json([
            'message' => 'Inquiry successfully submitted!',
            'inquiry' => $data
        ], 200);
    }

}
