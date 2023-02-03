import React from "react";
import AnswerQuiz from "./AnswerQuiz";
import { useSelector, useDispatch } from "react-redux";
import {
    addQuestions,
    setTitleQuestion,
    deleteQuestion,
} from "./../../Pages/Quizzes/store/quizSlice";

export default function QuestionQuiz() {
    const dispatch = useDispatch();
    const quiz = useSelector((state) => state.quiz);
    const addQuestion = () => {
        dispatch(addQuestions());
    };
    const handleChangeQuestion = (e, index) => {
        dispatch(setTitleQuestion({ index, title: e.target.value }));
    };
    const handDleDeleteQuestion = (index) => {
        dispatch(deleteQuestion({ index }));
    };
    return (
        <>
            {quiz.questions.map((question, index) => (
                <div
                    key={index}
                    className="relative text-gray-900 grid grid-cols-1 md:grid-cols-[1fr,1fr] md:gap-4 p-1 border border-gray-700 rounded-md mb-2"
                >
                    <button
                        onClick={() => handDleDeleteQuestion(question.id)}
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
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-2xl leading-6 font-medium text-gray-900">
                            Questions
                        </h3>
                        <input
                            type="text"
                            onChange={(e) =>
                                handleChangeQuestion(e, question.id)
                            }
                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                            placeholder="Titre du quizz"
                        />
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <AnswerQuiz index={question.id} question={question} />
                    </div>
                </div>
            ))}
            <div className="py-5 sm:px-6 bg-gray-200">
                <button
                    onClick={addQuestion}
                    className="block uppercase mx-auto shadow bg-blue-800 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded-lg"
                >
                    Ajouter une question
                </button>
            </div>
        </>
    );
}
