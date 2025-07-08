import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListEmp() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateError, setUpdateError] = useState(null);
    const [updateLoading, setUpdateLoading] = useState(false);

    const fetchEmployees = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("refresh token not found");

            const response = await axios.get("http://4.247.174.131:5000/employee", {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                    "Content-Type": "application/json"
                }
            });
            setEmployees(response.data.result);
        } catch (err) {
            console.error("Failed to fetch employees:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEditing = (emp) => {
        setFormData(emp);  // populate formData with employee info
        setIsEditing(true);
        setUpdateError(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        setUpdateError(null);
        try {
            const token = localStorage.getItem("refreshToken");
            await axios.put(`http://4.247.174.131:5000/employee/${formData.ID}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            setIsEditing(false);
            fetchEmployees();
        } catch (err) {
            setUpdateError(err.response?.data?.message || err.message);
        } finally {
            setUpdateLoading(false);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData({});
    };

    // const handlePasswordChange = (e) => {
    //     const { name, value } = e.target;
    //     setPassword(prev => ({ ...prev, [name]: value }));
    // };

    // const handlePasswordUpdate = async (e) => {
    //     e.preventDefault();
    //     setPasswordUpdateLoading(true);
    //     setPasswordUpdateError(null);
    //     try {
    //         const token = localStorage.getItem("refreshToken");
    //         await axios.put(`http://4.247.174.131:5000/employee/${formData.ID}/password`, password, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         setPassword({
    //             current_password: "",
    //             new_password: "",
    //             confirm_password: ""
    //         });
    //         alert("Password updated successfully");
    //     } catch (err) {
    //         setPasswordUpdateError(err.response?.data?.message || err.message);
    //     } finally {
    //         setPasswordUpdateLoading(false);
    //     }
    // };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full bg-blue-200 min-h-screen py-10 px-4">
            {isEditing ? (
                <div className="flex items-center justify-center">
                    <div className=" bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl">

                        {updateError && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {updateError}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-5 mb-6">
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="FullName"
                                        value={formData.FullName || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="Phone"
                                        value={formData.Phone || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">Position</label>
                                    <input
                                        type="text"
                                        name="Position"
                                        value={formData.Position || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">Salary</label>
                                    <input
                                        type="text"
                                        name="Salary"
                                        value={formData.Salary || ''}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                                    disabled={updateLoading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded"
                                    disabled={updateLoading}
                                >
                                    {updateLoading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>

                        {/* Change Password */}
                        {/* <div>
                        <hr className="my-6" />
                        <form onSubmit={handlePasswordUpdate} className="mt-6">
                            <h3 className="font-semibold text-gray-700 mb-4">Change Password</h3>
                            {passwordUpdateError && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                                    {passwordUpdateError}
                                </div>
                            )}
                            <div className="grid sm:grid-cols-2 gap-5 mb-4">
                                <input type="password" name="current_password" value={password.current_password} onChange={handlePasswordChange} placeholder="Current Password" className="w-full p-2 border rounded" />
                                <input type="password" name="new_password" value={password.new_password} onChange={handlePasswordChange} placeholder="New Password" className="w-full p-2 border rounded" />
                                <input type="password" name="confirm_password" value={password.confirm_password} onChange={handlePasswordChange} placeholder="Confirm Password" className="w-full p-2 border rounded" />
                            </div>
                            <div className="flex justify-end mt-2">
                                <button type="submit" className="bg-purple-500 p-2 px-4 hover:bg-purple-700 text-white rounded">
                                    {passwordUpdateLoading ? "Updating..." : "Change Password"}
                                </button>
                            </div>
                        </form>
                    </div> */}
                    </div>
                    </div>
                    ) : (
                    <>
                        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">All Employees</h1>
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
                                                <p className="font-medium">{emp.Address}</p>
                                            </div>
                                        </div>

                                        <button
                                            className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-900 transition"
                                            onClick={() => handleEditing(emp)}
                                        >
                                            ✏️ Update Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
            )}
                </div>
            );
}
