<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Http\Resources\QuizzeResource;
use App\Models\Question;
use App\Models\Quizzes;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;


/* Notificaion en temps réel */

Route::post('/send', function (Request $request) {

    $response = Http::withHeaders([
        'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.a8cjcSRUAcHdnGNMKifA4BK5epRXxQI0UBp2XpNrBdw',
        // 'Authorization' => 'Bearer ' . env('MERCURE_JWT_TOKEN'),
        'Content-Type' => 'application/x-www-form-urlencoded',
        'Accept' => 'application/json',
    ])->asForm()
        ->post('http://localhost:9000/.well-known/mercure', [
            'topic' => 'https://example.com/users/dunglas',
            'data' => json_encode($request->all()),
        ]);
    return response()->json($response->body());
});

Route::get('/notif', function () {
    return view('notif');
});

Route::get('/', HomeController::class);

Route::resource('quiz', QuizController::class)->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
