import React from "react";
import { Link } from "@inertiajs/inertia-react";
import EditSvg from "@/Svg/EditSvg";

export default function ItemQuiz({ quiz }) {
    return (
        <>
            <Link href={route("quiz.show", quiz.id)}>
                <div className="rounded">
                    <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                                {quiz.title}
                            </h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">
                                {quiz.description}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                                <p className="text-sm">
                                    {new Date(
                                        quiz.updated_at
                                    ).toLocaleDateString("fr-FR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <button
                                    className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                    aria-label="edit note"
                                    role="button"
                                >
                                    <EditSvg />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
