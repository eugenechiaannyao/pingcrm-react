<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;


    public function showLinkRequestForm(): \Inertia\Response
    {
        return Inertia::render('Auth/Passwords/Email');
    }

    /**
     * @throws ValidationException
     */
    public function sendResetLinkEmail(Request $request)
    {

        $this->validateEmail($request);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        if ($response == Password::RESET_LINK_SENT) {
            $this->sendResetLinkResponse($request, $response);
            return redirect()->route('login')->with('success', 'We have sent a password reset link!');
        } else {
            $this->sendResetLinkFailedResponse($request, $response);
            return redirect()->route('forgot')->with('error', 'We don\'t recognise this email:(');
            // White Screen pops up after echo...
        }
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
}
