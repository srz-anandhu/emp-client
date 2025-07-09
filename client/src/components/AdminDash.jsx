import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { LogOut } from "lucide-react";

export default function AdminDash() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("token")

        navigate("/")
    }

    return (
        <div className="min-h-screen bg-blue-200 flex flex-col items-center px-4">
            <Header />

            <div className="w-full max-w-xl mt-16">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Admin Dashboard
                </h2>

                <div className="bg-gradient-to-r from-blue-300 to-purple-300 shadow-xl rounded-2xl p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
                    <button
                        onClick={() => navigate("/admin/addemployee")}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-200"
                    >
                        ➕ Add New Employee
                    </button>

                    <button
                        onClick={() => navigate("/employees")}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-200"
                    >
                        📋 View All Employees
                    </button>

                    <button
                        onClick={() => navigate("/admin/add-admin")}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-200 col-span-full"
                    >
                        👤 Add New Admin
                    </button>

                    {/* Logout Button */}

                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-xl shadow hover:bg-red-600 transition col-span-full"
                    >
                        <LogOut size={20} color="black" />
                        Logout
                    </button>

                </div>
            </div>
        </div>
    );
}
