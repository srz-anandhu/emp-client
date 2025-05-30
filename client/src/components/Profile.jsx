import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateLoading, setUpdateLoading] = useState(false);
    const [updateError, setUpdateError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {

        fetchUserData();
    }, []);

    const fetchUserData = () => {
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
            console.log(parsedUser, 'user');

            setUser(parsedUser);
            setFormData(parsedUser);
            setLoading(false);

        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.error(err)
            // Redirect to login after 2 sec showing error
            setTimeout(() => navigate("/login"), 2000);
        }
    }

    // logout
    const handleLogout = (e) => {
        try {

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');

            navigate("/login")

        } catch (err) {
            console.error('Logout error:', err);
            alert('Failed to logout properly.Please clear your browser cache.')
        }
        localStorage.removeItem("user");

        navigate("/login");
    }

    const handleEdit = () => {
        setIsEditing(true);
        setUpdateError(null);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(user); // Reset to original data
        setUpdateError(null);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        let processedValue = value;
        if (name === 'salary') {
            processedValue = value === '' ? '' : Number(value);
        }
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        setUpdateError(null);

        try {
            // Get the refresh token from localStorage
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                throw new Error('No access token found');
            }

            if (!user?.id) {
                throw new Error('No user id found')
            }

            console.log(formData);


            

            // API call to update employee data
            const response = await axios.put(
                `http://localhost:8080/employee/${user.id}`, formData,
                {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            )

            console.log(response.data);
            if (response.data.status === 'ok') {
                const fetchResponse = await axios.get(
                    `http://localhost:8080/employee/${user.id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${refreshToken}`
                        }
                    }
                )
                if (fetchResponse.data) {
                    let {
                        ID,
                        Name,
                        Email,
                        Phone,
                        Position,
                        Address,
                        Salary
                    } = fetchResponse.data?.result;
                    
                    const updatedUser = {
                        id: ID || '',
                        name: Name || '',
                        email: Email || user.email,
                        phone: Phone || '',
                        position: Position || '',
                        address: Address || '',
                        salary: Salary || 0
                    }
                    // localStorage.setItem('user', JSON.stringify(updatedUser));
                    console.log('updatedUser', updatedUser)
                    setUser(updatedUser);
                    setFormData(updatedUser);

                    setIsEditing(false);
                    alert('Profile updated successfully!');
                }
            }



        } catch (err) {
            console.error('Update error:', err);
            setUser(user);
            setFormData(user);
            const errorMessage = err.response?.data?.message || err.response?.data?.error || err.message || 'Failed to update profile';
            setUpdateError(errorMessage);
        } finally {
            setUpdateLoading(false);
        }
    }

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

            {isEditing ? (
                <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl">
                    {updateError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {typeof updateError === 'object' ? JSON.stringify(updateError) : updateError}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-5 mb-6">
                            <div>
                                <label className="block text-gray-700 text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email || ''}
                                     onChange={handleChange}
                                    className="w-full p-2 border rounded bg-gray-100"
                                    disabled
                                />
                            </div>
             
                  
                            <div>
                                <label className="block text-gray-700 text-sm mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone || ''}
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
                                    name="position"
                                    value={formData.position || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                              <div>
                                <label className="block text-gray-700 text-sm mb-1">Salary</label>
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-gray-700 text-sm mb-1">Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    rows="3"
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
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center min-w-[120px]"
                                disabled={updateLoading}
                            >
                                {updateLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Saving...
                                    </>
                                ) : 'Save Changes'}
                            </button>
                        </div>
                    </form>

                    
                </div>
            ) : (
                <>
                    <div className="bg-gradient-to-r from-blue-300 to-violet-300 rounded-xl shadow-xl p-8 w-full max-w-2xl">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <p className="text-gray-700 text-sm">Employee ID</p>
                                <h2 className="font-semibold text-lg">{user?.id || 'N/A'}</h2>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Name</p>
                                <h2 className="font-semibold text-lg">{user?.name || 'Not Provided'}</h2>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Email</p>
                                <h2 className="font-semibold text-lg">{user?.email || 'Not Provided'}</h2>
                            </div>
                
                            <div>
                                <p className="text-gray-700 text-sm">Phone</p>
                                <h2 className="font-semibold text-lg">{user?.phone || 'Not Provided'}</h2>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Position</p>
                                <h2 className="font-semibold text-lg">{user?.position || 'Not Provided'}</h2>
                            </div>
                             <div>
                                <p className="text-gray-700 text-sm">Salary</p>
                                <h2 className="font-semibold text-lg">{user?.salary || 'Not Provided'}</h2>
                            </div>
                            <div className="sm:col-span-2">
                                <p className="text-gray-700 text-sm">Address</p>
                                <h2 className="font-semibold text-lg">{user?.address || 'Not Provided'}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={handleEdit}
                            className="bg-blue-500 hover:bg-blue-700 my-5 rounded p-2 text-white cursor-pointer"
                        >
                            Edit Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-700 p-2 rounded my-5 text-white hover:bg-red-800"
                        >
                            Log Out
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
