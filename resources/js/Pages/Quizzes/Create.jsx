import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { rezetState } from "./store/quizSlice";
import TitleQuiz from "./../../Components/createQuiz/TitleQuiz";
import QuestionQuiz from "./../../Components/createQuiz/QuestionQuiz";
import { useUnload } from "./../../utils/utils";

export default function Create(props) {
    const quiz = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const saveQuiz = async () => {
        await axios.post("/quiz", quiz);
    };
    useUnload((e) => {
        e.preventDefault();
        const exit = confirm("Are you sure you want to leave?");
        if (exit) window.close();
    });

    useEffect(() => {
        return () => {
            dispatch(rezetState());
        };
    }, []);

    return (
        <>
            <Head title="Create Quizz" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Création d'un quizz
                        </h2>
                        <div className="flex">
                            <button
                                onClick={saveQuiz}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                }
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-12">
                    <TitleQuiz />
                    <QuestionQuiz />
                </div>
            </AuthenticatedLayout>
        </>
    );
}
