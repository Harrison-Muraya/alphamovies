<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    
Route::controller(App\Http\Controllers\Front\DashboardController::class)->group(function () {
    Route::get('dashboard', 'index')->name('front.dashboard');
    Route::get('dashboard/{id}', 'show')->name('front.dashboard.show');
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
