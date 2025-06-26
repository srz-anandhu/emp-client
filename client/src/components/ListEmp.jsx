import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ListEmp() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]); // Changed from single user to array
    const [loading, setLoading] = useState(true);

    // Mock data - replace with actual API call
    useEffect(() => {
        const mockEmployees = [
            {
                id:1,
                employee_id: "SRZEEE555",
                name: "Anandhu Rajan",
                email: "anandhu@gmail.com",
                dob: "15/04/2001",
                phone: "+91 7559048216",
                address: "Gandhinagar mangalapuram",
                salary: "₹55,000",
                position: "Software Engineer"
            },
            {
                id: 2,
                name: "Aadhil Ahammad",
                email: "aadhil@example.com",
                dob: "20/05/1996",
                phone: "9090909090",
                address: "Mangalapuram Gandhinagar",
                salary: "₹75,000",
                position: "Senior Developer"
            },
            // Add more employees as needed
        ];
        setEmployees(mockEmployees);
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full bg-blue-200 min-h-screen py-10 px-4">
            <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">All Employees</h1>

            {/* Employee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {employees.map((emp) => (
                    <div key={emp.id} className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="font-bold text-xl text-blue-800">{emp.name}</h2>
                                    <p className="text-blue-600">{emp.position}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {emp.salary}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-700 text-xs">Email</p>
                                    <p className="font-medium">{emp.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">Phone</p>
                                    <p className="font-medium">{emp.phone}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">DOB</p>
                                    <p className="font-medium">{emp.dob}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 text-xs">Address</p>
                                    <p className="font-medium line-clamp-1">{emp.address}</p>
                                </div>
                            </div>

                            <button 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                onClick={() => navigate(`/employee/${emp.id}`)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}