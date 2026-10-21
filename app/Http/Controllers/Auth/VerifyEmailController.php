<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            $ruta = $request->user()->role === 'admin' ? 'admin.dashboard' : 'home';
            return redirect()->intended(route($ruta, absolute: false).'?verified=1');
    }
    if( $request->user()->markEmailAsVerified()){
        event(new Verified($request->user()));
    }
    $ruta = $request->user()->role === 'admin' ? 'admin.dashboard' : 'home';
    return redirect()->intended(route($ruta, absolute: false).'?verified=1');
    }
}
