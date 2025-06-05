
export default function AddEmployee() {
    return (
        <div>
            <div className="w-full bg-blue-200 min-h-screen flex items-center flex-col py-10">
                <h1 className="text-4xl font-bold text-blue-700 mb-8">Create Employee</h1>

                <div className="bg-gradient-to-r from-blue-300 to-purple-300 shadow-2xl p-8 rounded-xl max-w-full">
                    <form >
                        <div className="grid sm:grid-cols-2 gap-5 mb-6">

                            <div>
                                <label className="text-sm text-gray-700">Employee ID</label>
                                <input
                                    type="text"
                                    name="employee-id"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">DOB</label>
                                <input
                                    type="text"
                                    name="dob"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Salary</label>
                                <input
                                    type="number"
                                    name="salary"
                                    className="block border rounded"
                                    required
                                />
                            </div>

                        </div>

                        <div className="flex justify-end">
                            <button 
                                type="submit"
                                className="text-white bg-blue-500 hover:bg-blue-700 p-2 w-full rounded ">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
} 