import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            // Check if user data exists in localStorage
            const userData = localStorage.getItem('user');

            if (!userData) {
                throw new Error('No user session found');
            }

            const parsedUser = JSON.parse(userData);

            if (!parsedUser?.email) {
                throw new Error('Invalid user data format');
            }

            setUser(parsedUser);
            setLoading(false);

        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.error(err)
            // Redirect to login after 2 sec showing error
            setTimeout(() => navigate("/login"), 2000);
        }
    }, [navigate]);

        if (loading) {
        return (
            <div className="w-full bg-blue-200 min-h-screen flex items-center justify-center">
                <div className="text-2xl font-semibold">Loading profile...</div>
            </div>
        );
    }

        if (error) {
        return (
            <div className="w-full bg-blue-200 min-h-screen flex flex-col items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
                <p>Redirecting to login page...</p>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="w-full bg-blue-200 min-h-screen flex flex-col items-center py-10">
    
            <h1 className="text-4xl font-bold text-blue-700 mb-8">Profile</h1>

            {/* Profile Card */}
            <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl">
                <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                        <p className="text-gray-700 text-sm">Name</p>
                        <h2 className="font-semibold text-lg">{user?.name || 'Not Provided'}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Email</p>
                        <h2 className="font-semibold text-lg">{user?.email || 'Not Provided'}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Password</p>
                        <h2 className="font-semibold text-lg">**********</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">DOB</p>
                        <h2 className="font-semibold text-lg">{user?.dob || 'N/A'}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Phone</p>
                        <h2 className="font-semibold text-lg">+91 {user?.phone || 'Not Provided'}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Address</p>
                        <h2 className="font-semibold text-lg">{user?.address}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Salary</p>
                        <h2 className="font-semibold text-lg">₹{user?.salary}</h2>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">Position</p>
                        <h2 className="font-semibold text-lg">{user?.position || 'Not Provided'}</h2>
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
                <div>
                    <button className="bg-red-700 p-2 rounded my-5 text-white hover:bg-red-800">Log Out</button>
                </div>
            </div>
        </div>

    );
}
