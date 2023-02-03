import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import ListeQuizzes from "@/Components/ListeQuizzes";
import { Link } from "@inertiajs/inertia-react";

export default function Quizzes(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create Quizz
                    </h2>
                    <div className="flex">
                        <Link
                            href={route("quiz.create")}
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:blue-indigo-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
                        >
                            Create Quizz
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Liste quiz" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ListeQuizzes quizzes={props.quizzes.data} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
