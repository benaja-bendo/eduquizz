<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizzeResource;
use App\Models\Question;
use App\Models\Quizzes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quizzes = Quizzes::orderBy('id', 'desc')->paginate();
        return Inertia::render('Quizzes/Quizzes', [
            'quizzes' => QuizzeResource::collection($quizzes)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Quizzes/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $quiz = Quizzes::find($id);
        return Inertia::render('Quizzes/Show', [
            'quiz' => new QuizzeResource($quiz),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
