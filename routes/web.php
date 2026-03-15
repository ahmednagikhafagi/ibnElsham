<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/ibn-alsham', 'IbnAlsham')->name('ibn-alsham');

Route::inertia('dashboard', 'dashboard')->name('dashboard');

require __DIR__.'/settings.php';
