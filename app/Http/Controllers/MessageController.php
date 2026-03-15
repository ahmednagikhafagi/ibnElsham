<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validation
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'phone'   => 'required|string|min:8|max:20',
            'message' => 'required|string|min:5',
        ]);

        // 2. Save to Database
         Message::create($validated);

        // 3. Redirect back with a success flash message
        return back()->with('success', 'Your message has been sent!');
    }
}
