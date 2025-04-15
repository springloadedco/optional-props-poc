<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('welcome', [
    'one' => Inertia::optional(function () {
        sleep(1);
        return 'one loaded from server';
    }),
    'two' => Inertia::optional(function () {
        sleep(1);
        return 'two loaded from server';
    }),
    'three' => Inertia::optional(function () {
        sleep(1);
        return 'three loaded from server';
    }),
    'four' => Inertia::optional(function () {
        sleep(1);
        return 'four loaded from server';
    }),
]))->name('home');
