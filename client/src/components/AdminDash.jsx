import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function AdminDash() {
    const navigate = useNavigate();

    return (
        <div className=" min-h-screen bg-blue-200 flex flex-col items-center">
            <Header />
  

                {/* <h2 className="text-3xl font-semibold mb-6 text-blue-700">Admin Dashboard</h2> */}
                {/* <div className="bg-gray-200 w-[50px] h-[50px] rounded-4xl"></div> */}
            <div className=" grid sm:grid-cols-2 gap-5 bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg rounded-xl p-8 mt-10 w-96 text-center">

                <button
                    onClick={() => navigate("/admin/addemployee")}
                    className="w-full bg-blue-500 text-white py-3  rounded-xl hover:bg-blue-700 transition mb-4"
                >
                    ➕ Add New Employee
                </button>

                <button
                    onClick={() => navigate("/employees")}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-700 transition mb-4"
                >
                    ✏️ Update Employee Details
                </button>

                <button
                    onClick={() => navigate("/employees")}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                    📋 View All Employees
                </button>

                <button
                    onClick={() => navigate("/employees")}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                    👤 Add New Admin
                </button>
            </div>
        </div>
    );
}
