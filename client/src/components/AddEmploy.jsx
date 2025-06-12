export default function AddEmployee() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-10">Create Employee</h1>

            <div className=" bg-gradient-to-r from-blue-300 to-purple-300 w-130  bg-white shadow-lg rounded-2xl p-10">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                        <input
                            type="text"
                            name="employee-id"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                        <input
                            type="text"
                            name="position"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                        <input
                            type="number"
                            name="salary"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>
                </form>

                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Add Employee
                    </button>
                </div>
            </div>
        </div>
    );
}
