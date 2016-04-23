<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Http\Requests;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'budget' => 'integer',
            'message' => 'required'
        ]);

        $mail = Mail::send('emails.contact', ['data' => $request->all()], function($m) {
            $m->to('flp.hajek@gmail.com');
            $m->from('admin@filiphajek.com');
            $m->subject('Contact Form Submitted');
        });

        return response()->json(['status' => 'sent']);
    }
}
