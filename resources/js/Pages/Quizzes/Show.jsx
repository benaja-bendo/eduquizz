import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Show({ quiz, ...props }) {
    const { data } = quiz;
    const [countQuestions, setCountQuestions] = useState(data.questions.length);
    const [questions, setQuestions] = useState(data.questions);
    const [currentQuestion, setCurrentQuestion] = useState(data.questions[0]);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [error, setError] = useState(null);

    const handleValidate = () => {
        const findAnswer = currentQuestion.answers.find((a) => a.id === answer);
        if (findAnswer) {
            if (findAnswer.is_correct) {
                setScore(score + 1);
                setCurrentQuestion(questions[countQuestions - 1]);
            } else {
                setCurrentQuestion(questions[countQuestions - 1]);
            }
            setError(null);
        } else {
            setError("Vous devez choisir une réponse");
        }
    };
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <div className="flex justify-center items-center">
                        <h2 className="font-bold text-xl text-red-800 leading-tight text-center">
                            Quiz
                        </h2>
                    </div>
                }
            >
                <Head title="Quiz" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white shadow p-2">
                        <h2 className="text-center font-semibold text-2xl text-gray-800 leading-tight mb-2">
                            {data.title}
                        </h2>
                        {error != null ? (
                            <p className="text-center font-semibold text-xl text-red-800 leading-tight mb-2 p-2 bg-red-300">
                                {error}
                            </p>
                        ): null}

                        <div className="min-h-[200px] border-t border-gray-200 gap-2 mb-2 grid grid-cols-1 md:grid-cols-2">
                            <div className="h-full w-full flex justify-center items-center">
                                <p className="font-semibold text-xl text-gray-800 leading-tight">
                                    {currentQuestion.question}
                                </p>
                            </div>
                            <div className="grid h-full w-full">
                                <ul className="list-disc flex flex-col justify-evenly">
                                    {currentQuestion.answers.map(
                                        (answer, index) => (
                                            <li
                                                key={index}
                                                className="flex gap-2"
                                            >
                                                <input
                                                    type="radio"
                                                    name="answer"
                                                    id={answer.id}
                                                    value={answer.id}
                                                    onChange={(e) =>
                                                        setAnswer(answer.id)
                                                    }
                                                />
                                                <label htmlFor={answer.id}>
                                                    {answer.answer}
                                                </label>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-md bg-gray-200 flex justify-between items-center p-2">
                            <div className="font-semibold">score : {score}</div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleValidate}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Valider
                                </button>
                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Suivant
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Précédent
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
