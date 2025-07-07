import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        employee_id: "",
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        dob: "",
        position: "",
        salary: ""
    });

    const [error, setError] = useState({
        employee_id: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev, [name]: value

        }))
        //console.log(value);

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                throw new Error("refresh token not found")
            }

            const response = await axios.post("http://4.247.174.131:5000/admin/create", employee,
                {
                    headers: {
                        Authorization : `Bearer ${refreshToken}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            console.log(response.data);
            if (response.data.status === 'ok') {

                 console.log(employee);
            alert("added employee successfully")
            navigate("/admin/dashboard")
            } else {
                // backend responded with status = not ok
                const backendError = response.data.error;
                alert(backendError.message || "Employee creation failed");
                console.error("Backend error:", backendError);
                setError(backendError.message);
            }
            
        } catch (err) {
           
            if (

                err?.response?.status === 409 ||
                err?.response?.data?.message?.toLowerCase()?.includes("conflict")
            ) {
                setError( { employee_id: "Employee ID already exists" })
            } else {
                setError({employee_id: "Something went wrong. Try again." })
            }
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-10">Add Employee</h1>

            <div className=" bg-gradient-to-r from-blue-300 to-purple-300 w-130  bg-white shadow-lg rounded-2xl p-10">
    
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                        { error.employee_id && (
                            <p className="text-sm text-red-500 mt-1">{error.employee_id}</p>
                        )}
                        <input onChange={handleChange}
                            type="text"
                            name="employee_id"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input onChange={handleChange}
                            type="text"
                            name="name"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input onChange={handleChange}
                            type="email"
                            name="email"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input onChange={handleChange}
                            type="password"
                            name="password"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input onChange={handleChange}
                            type="text"
                            name="address"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input onChange={handleChange}
                            type="tel"
                            name="phone"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input onChange={handleChange}
                            type="date"
                            name="dob"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                        <input onChange={handleChange}
                            type="text"
                            name="position"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                        <input onChange={handleChange}
                            type="number"
                            name="salary"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Add Employee
                    </button>
                </div>
                </form>

            </div>
        </div>
    );
}
