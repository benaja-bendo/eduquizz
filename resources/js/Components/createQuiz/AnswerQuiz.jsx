import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addAnswers,
    setTitleAnswer,
    changeCorrectAnswer,
    deleteAnswer,
} from "./../../Pages/Quizzes/store/quizSlice";

export default function AnswerQuiz({ index, question }) {
    const dispatch = useDispatch();
    const quiz = useSelector((state) => state.quiz);
    const addAnswer = () => {
        dispatch(addAnswers({ index }));
    };
    const handleChangeAnswer = (e, indexAnswer) => {
        dispatch(
            setTitleAnswer({
                indexQuestion: index,
                indexAnswer: indexAnswer,
                title: e.target.value,
            })
        );
    };
    const handleChangeRadio = (e, indexAnswer) => {
        dispatch(
            changeCorrectAnswer({
                indexQuestion: index,
                indexAnswer: indexAnswer,
            })
        );
    };
    const handDeleteAnswer = (indexAnswer) => {
        dispatch(
            deleteAnswer({ indexQuestion: index, indexAnswer: indexAnswer })
        );
    };
    return (
        <>
            <div className="flex gap-4 items-center justify-between bg-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    Réponses
                </h3>
                <button
                    onClick={addAnswer}
                    className="block uppercase shadow bg-blue-800 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded-lg"
                >
                    Ajouter une réponse
                </button>
            </div>
            {question.answers.map((answer, index) => (
                <div
                    key={index}
                    className="relative mt-4 flex gap-4 items-center"
                >
                    <button
                        onClick={() => handDeleteAnswer(answer.id)}
                        className="absolute top-0 right-0 p-2 bg-red-400 rounded-md hover:bg-red-600 text-red-500 hover:text-red-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div>
                        <input
                            type="text"
                            value={answer.answer}
                            onChange={(e) => handleChangeAnswer(e, answer.id)}
                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                            placeholder="Réponse 1"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="radio"
                            id="radio"
                            name="is_correct"
                            checked={answer.is_correct}
                            onChange={(e) => handleChangeRadio(e, answer.id)}
                        />
                        <label htmlFor="radio">Bonne réponse</label>
                    </div>
                </div>
            ))}
        </>
    );
}
