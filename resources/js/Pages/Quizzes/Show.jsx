import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Show(props) {
    const { quiz } = props;
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Vous participez au Quizz
                        </h2>
                    </div>
                }
            >
                <Head title="Participer au Quizz" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white shadow p-2">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-2">
                            {quiz.title}
                        </h2>
                        <div className="min-h-[200px] border-t border-gray-200 flex gap-2 mb-2">
                            <div className="h-full w-full">question</div>
                            <div className="h-full w-full">reponse</div>
                        </div>

                        <div className="rounded-md bg-gray-200 flex justify-between items-center p-2">
                            <div>score : 0</div>
                            <div className="flex gap-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Valider
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Suivant
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Terminer
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Quitter
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Rejouer
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
