import { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function() {

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate();

const handleChange = (e) => {
    setFormData((prev) => ( {
        ...prev, [e.target.name] : e.target.value
    }))
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://4.247.174.131:5000/employee/login", formData,
            {
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        )

        if (response.data.status === 'ok') {

            const { token, refresh_token } = response.data.result;

            const user = response.data.result.EmpResp;

            localStorage.setItem("accessToken", token);
            localStorage.setItem("refreshToken", refresh_token);
            localStorage.setItem("user", JSON.stringify(user));

            alert("successfully logged in")
            navigate("/profile")
        }

    } catch (err) {
        if (err.response && err.response.data) {
            alert(err.response.data.message || "Login failed")
        } else {
            alert("Server error")
        }
        console.error(err)
    }
}

   
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
            <Header />
            <form onSubmit={handleSubmit}  className="w-96 bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg shadow-2xl ">
                <h2 className="text-2xl font-bold text-center my-2">Login!</h2>

                {/* Email Input */}
                <div className="mt-6 flex justify-center">
                    <input onChange={handleChange} name="email" className="text-sm px-4 py-1 border border-gray-300 rounded-md
                                 focus:border-gray-200 focus:border-2
                                 focus:outline-none w-80  placeholder-white"
                        type="email" placeholder="Email" />

                </div>
                {/* Password Input */}
                <div className="mt-6 flex justify-center">
                    <input onChange={handleChange} name="password" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="password" placeholder="Password" />
                </div>
                 

                <div className=" mt-6 flex justify-center flex-col items-center">
                     {/* <Link
                        to="/"
                        className="text-sm text-black hover:underline mb-3"
                    >
                        Don't have an account? Signup
                    </Link> */}
 
                    <button type="submit" className="bg-blue-500 px-6 py-2 font-bold text-white rounded-md hover:bg-blue-600 transition-colors
                                                      cursor-pointer mb-4"
                    >
                        Log-In</button>
                    
        
                </div>
            </form>
        </div>
    )
}