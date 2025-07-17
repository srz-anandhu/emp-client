import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddAdmin() {

    const navigate = useNavigate();

    let init = {
        name: "",
        email:"",
        password: ""
    }

    const [adminForm, setAdminForm] = useState(init);

    useEffect(()=> {
        setAdminForm(init)
    },[])

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAdminForm((prev) => (
            {
                ...prev, [name]: value
            }
        ))
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault();


        try {

            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                throw new Error("refresh token not found");
            }
            const response = await axios.post("http://4.247.174.131:5000/admin/create-admin", adminForm,
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        "Content-Type":"application/json"
                    }
                }
            )

           if (response.data.status === 'ok') {
            console.log(response.data.result);
            alert("Added new admin successfully");
            navigate("/admin/dashboard")
           } else {
            setError(err);
            const backendError = response.data.error;
            alert(backendError.message || "Adding admin failed");
            console.error("backend err : ", backendError)
            setError(backendError.message);

           }
            

        } catch(err) {
            console.error("adding admin error:", err)
            alert("something went wrong when connecting to server.")
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center  bg-blue-200">
            <h1 className="text-4xl font-bold text-blue-800 mb-10">Add Admin</h1>
            <div className=" bg-gradient-to-r from-blue-300 to-purple-300 w-130  bg-white shadow-lg rounded-2xl p-10">
                <form onSubmit={handleSubmit} autoComplete="off" className="grid grid-cols-1  gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name </label>
                        <input onChange={handleChange}
                            type="text"
                            name= "name"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input onChange={handleChange}
                            type="email"
                            autoComplete="off"
                            name= "admin-email"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input onChange={handleChange}
                            type="password"
                            autoComplete="off"
                            name="admin-password"
                            className="w-full border border-gray-200 focus:border-2 focus:outline-none rounded-md px-3 py-2"
                            required
                        />
                    </div>

                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                        >
                            Add Admin
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
