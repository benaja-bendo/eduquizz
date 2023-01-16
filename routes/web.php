<?php

use App\Http\Controllers\ProfileController;
use App\Models\Quizzes;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/quiz/{quiz}', function (Request $request, int $quiz) {
    dd($quiz);
    $quiz = Quizzes::find($quiz);
    return Inertia::render('Quizzes/Show', [
        'quiz' => $quiz,
    ]);
})->middleware(['auth', 'verified'])->name('quiz.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/quizzes', function () {
    $quizzes = Quizzes::orderBy('id', 'desc')->paginate(6);
    return Inertia::render('Quizzes/Quizzes', [
        'quizzes' => $quizzes,
    ]);
})->middleware(['auth', 'verified'])->name('quizzes');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
