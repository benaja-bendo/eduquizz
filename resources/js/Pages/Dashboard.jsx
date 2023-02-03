import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
import { useEventSource } from "./../hooks/useEventSource";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const sendNotification = async () => {
        try {
            const response = await axios.post("/send", { title: title });
            if (response.status === 200) {
                setTitle("");
            }
        } catch (error) {
            console.log("error send", error);
        }
    };

    const { data, error } = useEventSource({
        mercureURL: "http://localhost:9000/.well-known/mercure",
        topicURL: "https://example.com/users/dunglas",
    });

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Vous êtes un{" "}
                            <span className="font-bold">
                                {props.auth.user.role}
                            </span>
                        </div>
                        <div className="p-6 text-gray-900 bg-slate-500 text-center">
                            Vous êtes un{" "}
                            <span className="font-bold">
                                {props.auth.user.role}
                            </span>
                        </div>
                        <div className="p-6 text-gray-900">
                            envoyer un notification à tous les utilisateurs
                            <div>
                                <input
                                    type="text"
                                    placeholder="titre"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                                <button
                                    onClick={() => sendNotification()}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    envoyer
                                </button>
                            </div>
                            <div>
                                <p>data: {data?.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
