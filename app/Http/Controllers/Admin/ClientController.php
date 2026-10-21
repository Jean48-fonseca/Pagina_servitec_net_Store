<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        $clients = User::where('role', 'user')->latest()->paginate(15);

        return Inertia::render('Admin/Clients/Index', [
            'clients' => $clients
        ]);
    }
}
