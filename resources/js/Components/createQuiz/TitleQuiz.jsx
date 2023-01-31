import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setTitle,
    setDescription,
} from "./../../Pages/Quizzes/store/quizSlice";

export default function TitleQuiz() {
    const dispatch = useDispatch();
    const quiz = useSelector((state) => state.quiz);
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-12">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    titre du quizz
                </h3>
                <input
                    type="text"
                    onChange={(e) => {
                        dispatch(setTitle(e.target.value));
                    }}
                    value={quiz.title}
                    className="form-input rounded-md shadow-sm mt-1 block w-full"
                    placeholder="Titre du quizz"
                />
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    Détails le quizz
                </p>
                <textarea
                    placeholder="Détails sur les questions"
                    onChange={(e) => {
                        dispatch(setDescription(e.target.value));
                    }}
                    value={quiz.description}
                    className="form-input rounded-md shadow-sm mt-1 block w-full"
                    rows={5}
                />
            </div>
        </div>
    );
}
