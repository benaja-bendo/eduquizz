import React from "react";
import ItemQuiz from "./ItemQuiz";

export default function ListeQuizzes({ quizzes }) {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {quizzes.map((quiz) => (
                <ItemQuiz key={quiz.id} quiz={quiz} />
            ))}
        </div>
    );
}
