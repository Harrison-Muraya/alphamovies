<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        // Logic to fetch and display the dashboard overview
        return Inertia::render('dashboard');
    }
}
