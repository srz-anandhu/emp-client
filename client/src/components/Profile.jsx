

export default function Profile() {
    return (
        <div className="w-full bg-blue-200 min-h-screen flex flex-col items-center py-10">
    
            <h1 className="text-4xl font-bold text-blue-700 mb-8">Profile</h1>

            {/* Profile Card */}
            <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl">
                <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                        <p className="text-gray-700 text-sm">Name</p>
                        <h2 className="font-semibold text-lg">Anandhu</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Email</p>
                        <h2 className="font-semibold text-lg">anandhu@gmail.com</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Password</p>
                        <h2 className="font-semibold text-lg">**********</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">DOB</p>
                        <h2 className="font-semibold text-lg">15/04/2001</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Phone</p>
                        <h2 className="font-semibold text-lg">+91 7559048216</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Address</p>
                        <h2 className="font-semibold text-lg">Gandhinagar mangalapuram</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Salary</p>
                        <h2 className="font-semibold text-lg">₹55,000</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Position</p>
                        <h2 className="font-semibold text-lg">Software Engineer</h2>
                    </div>
                </div>
            </div>
            {/* button section */}
            <div className="flex gap-4">
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 my-5 rounded p-2 text-white cursor-pointer">Edit Info</button>
                </div>
                <div>
                    <button className="bg-violet-500 my-5 rounded p-2 hover:bg-violet-700 text-white cursor-pointer">Update Profile</button>
                </div>
            </div>
        </div>

    );
}
