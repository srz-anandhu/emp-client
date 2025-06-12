import { useState } from "react";
import Header from "./Header";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {
   const navigate = useNavigate();

    const [adminFormData, setAdminFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setAdminFormData((prev) =>( {
            ...prev, [name] : value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:8080/admin/login", 
                adminFormData,
                {
                    headers : {
                        "Content-Type" :"application/json"
                    }
                }
            )

            console.log(response.data);
           if (response.data.status === 'ok') {
            
            const { token, refresh_token, role} = response.data.result;
            //console.log(token, refresh_token, role);
            if (response.data.result.role !== 'admin') {
                throw new Error("Not an admin")
            }
           
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refresh_token);
            localStorage.setItem('role', role);
            navigate("/admin/dashboard")
            
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
        {/* header */}
            <Header />
            
            {/* admin form */}
            <form onSubmit={handleSubmit} className="w-96 bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg shadow-2xl ">
                <h2 className="text-2xl font-bold text-center my-2">Admin Login!</h2>

                {/* Email Input */}
                <div className="mt-6 flex justify-center">
                    <input onChange={handleChange}  name="email" className="text-sm px-4 py-1 border border-gray-300 rounded-md
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
    
 
                    <button type="submit" className="bg-blue-500 px-6 py-2 font-bold text-white rounded-md hover:bg-blue-600 transition-colors
                                                      cursor-pointer mb-4"
                    >
                        Log-In</button>
                    
        
                </div>
            </form>
        </div>
    )
}