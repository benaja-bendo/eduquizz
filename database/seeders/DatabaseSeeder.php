<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quizzes;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $user1 = User::factory()->create([
            'name' => 'User prof',
            'email' => 'prof@mail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role' => 'professor',
        ]);

        $user1->quizzes()->saveMany(
            Quizzes::factory()->count(15)->make()
        );
        Quizzes::all()->each(function ($quiz) {
            $quiz->questions()->saveMany(
                Question::factory()->count(5)->make()
            );
        });

        Question::all()->each(function ($question) {
            $question->answers()->saveMany(
                Answer::factory()->count(4)->make(
                    [
                        'is_correct' => false,
                    ]
                )
            );
        });
    }
}
