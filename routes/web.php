<?php

use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;


Route::inertia('/', 'IbnAlsham')->name('ibn-alsham');

Route::post('/contact', [MessageController::class, 'store'])->name('contact.store');