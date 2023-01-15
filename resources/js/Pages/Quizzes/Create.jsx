export default function Create(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create Quizz
                    </h2>
                    <div className="flex"></div>
                </div>
            }
        >
            <Head title="Create Quizz" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Create Quizz</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
