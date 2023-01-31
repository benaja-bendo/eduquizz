<?php

use App\Http\Controllers\ProfileController;
use App\Http\Resources\QuizzeResource;
use App\Models\Question;
use App\Models\Quizzes;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function (Request $request) {
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

Route::get('/quiz/create', function (Request $request) {
    return Inertia::render('Quizzes/Create');
})->middleware(['auth', 'verified'])->name('quiz.create');

Route::post('/quiz', function (Request $request) {
    $data = $request->all();
    $title = $data['title'];
    $description = $data['description'];
    $questions = $data['questions'];
    $quiz = Quizzes::create([
        'user_id' => auth()->id(),
        'title' => $title,
        'description' => $description
    ]);

    foreach ($questions as $q) {
        $question = Question::create([
            'question' => $q['question'],
            'quiz_id' => $quiz->id
        ]);
        foreach ($q['answers'] as $a) {
            $question->answers()->create([
                'answer' => $a['answer'],
                'is_correct' => true
            ]);
        }
    }
    return redirect()->route('quiz.show', $quiz->id);
})->middleware(['auth', 'verified'])->name('quiz.store');


Route::get('/quiz/{quiz}', function (Request $request, int $quiz) {
    $quiz = Quizzes::find($quiz);
    return Inertia::render('Quizzes/Show', [
        'quiz' => new QuizzeResource($quiz),
    ]);
})->middleware(['auth', 'verified'])->name('quiz.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/quizzes', function () {
    $quizzes = Quizzes::orderBy('id', 'desc')->paginate();
    return Inertia::render('Quizzes/Quizzes', [
        'quizzes' => QuizzeResource::collection($quizzes)
    ]);
})->middleware(['auth', 'verified'])->name('quizzes');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
