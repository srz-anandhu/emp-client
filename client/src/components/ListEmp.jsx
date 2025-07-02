import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ListEmp() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]); // Changed from single user to array
    const [loading, setLoading] = useState(true);

    const fetchEmployees = async () => {
        try {

            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                throw new Error("refresh token not found")
            }

            const response = await axios.get("http://4.247.174.131:5000/employee", 
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log(response.data.result);
            
            setEmployees(response.data.result);
        } catch (err) {
            console.error("Failed to fetch employees:", err);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {

        fetchEmployees()

    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full bg-blue-200 min-h-screen py-10 px-4">
            <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">All Employees</h1>

            {/* Employee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {employees.map((emp) => (
                    <div key={emp.ID} className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-blue-600 font-bold">{emp.EmployeeID}</p>
                                    <h2 className="font-bold text-xl text-blue-800">{emp.FullName}</h2>
                                    <p className="text-blue-600">{emp.Position}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {emp.Salary}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="overflow-hidden">
                                    <p className="text-gray-700 text-xs">Email</p>
                                    <p className="font-medium truncate">{emp.Email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">Phone</p>
                                    <p className="font-medium">{emp.Phone}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">DOB</p>
                                    <p className="font-medium">{emp.DOB}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">Address</p>
                                    <p className="font-medium line-clamp-1">{emp.Address}</p>
                                </div>
                            </div>

                            {/* <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                onClick={() => navigate(`/employee/${emp.id}`)}
                            >
                                View Details
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}