import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ListEmp() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        // want to show employees by looping..now its a dummy data from profile page
               <div className="w-full bg-blue-200 min-h-screen flex flex-col items-center py-10">
    
            <h1 className="text-4xl font-bold text-blue-700 mb-8">All Employees (only for admin)</h1>

            {/* Profile Card */}
            <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl mb-5">
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
            <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl mb-4">
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

        </div>
    )
}