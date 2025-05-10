<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\CoreDevEmail;
use App\Models\Hardware;
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
    public function hardware($category)
    {
        $hardware = Hardware::where('category', $category)->get();
        return response()->json($hardware);
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

        Mail::to(env( $validated['type'] === 'Software' ? 'MAIL_SOFTWARE_ADDRESS':'MAIL_HARDWARE_ADDRESS'))->send(new CoreDevEmail($data));


        // You can return a success response or something else here
        return response()->json([
            'message' => 'Inquiry successfully submitted!',
            'inquiry' => $data
        ], 200);
    }

}
