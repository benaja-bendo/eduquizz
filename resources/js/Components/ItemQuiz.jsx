import React from "react";
import { Link } from "@inertiajs/inertia-react";
import EditSvg from "@/Svg/EditSvg";
import RunSvg from "@/Svg/RunSvg";
import DeleteSvg from "@/Svg/DeleteSvg";

export default function ItemQuiz({ quiz }) {
    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this quiz?")) {
            console.log("delete quiz");
            // axios.delete(route("quiz.destroy", quiz.id));
        }
    };

    const handleRun = (e) => {
        e.preventDefault();
        console.log("run quiz");
    };

    const handleEdit = (e) => {
        e.preventDefault();
        console.log("edit quiz");
    };
    return (
        <>
            <div className="rounded">
                <div className="w-full h-64 flex flex-col justify-between text-gray-800 dark:text-gray-100 dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div className="">
                        <Link href={route("quiz.show", quiz.id)}>
                            <h4
                                className="text-gray-800 dark:text-gray-100 font-bold mb-3"
                                style={{ minHeight: "48px" }}
                            >
                                {quiz.title && quiz.title.length > 50 ? (
                                    <span>
                                        {quiz.title.substring(0, 50)}...
                                    </span>
                                ) : (
                                    <span>{quiz.title}</span>
                                )}
                            </h4>
                        </Link>
                        <p className="text-gray-800 dark:text-gray-100 text-sm">
                            {quiz.description &&
                            quiz.description.length > 100 ? (
                                <span>
                                    {quiz.description.substring(0, 100)}...
                                </span>
                            ) : (
                                <span>{quiz.description}</span>
                            )}
                        </p>
                        <p className="text-sm py-1 text-red-400">
                            {new Date(quiz.updated_at).toLocaleDateString(
                                "fr-FR",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-evenly text-gray-800 dark:text-gray-100">
                        <button
                            onClick={(e) => handleEdit(e)}
                            className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                            aria-label="edit note"
                            role="button"
                        >
                            <EditSvg />
                        </button>
                        <button
                            onClick={(e) => handleRun(e)}
                            className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                            aria-label="edit note"
                            role="button"
                        >
                            <RunSvg />
                        </button>
                        <button
                            onClick={(e) => handleDelete(e)}
                            className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                            aria-label="edit note"
                            role="button"
                        >
                            <DeleteSvg />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
