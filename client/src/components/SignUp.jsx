import { Link } from "react-router-dom";
import Header from "./Header";

export default function SignUp() {


    return (

        <div className=" min-h-screen flex items-center justify-center flex-col bg-blue-200">
            {/* Header component */}
            <Header />
            <form className="w-96 bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg shadow-2xl ">
                <h2 className="text-2xl font-bold text-center my-2">Signup!</h2>
                {/* -------------------------------------------------------------- */}
                {/* Dummy url to admin page */}
                <div className="flex justify-center">

                <Link  to="/employees">admin?</Link>
                </div>

                {/* ------------------------------------------------------------------------- */}
                
                {/* Name Input */}
                <div className="mt-6 flex justify-center">
                    <input name="name" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="text" placeholder="Name" />
                </div>
                {/* Email Input */}
                <div className="mt-6 flex justify-center">
                    <input name="email" className="text-sm px-4 py-1 border border-gray-300 rounded-md
                                 focus:border-gray-200 focus:border-2
                                 focus:outline-none w-80  placeholder-white"
                        type="email" placeholder="Email" />

                </div>
                {/* Password Input */}
                <div className="mt-6 flex justify-center">
                    <input name="password" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="password" placeholder="Password" />
                </div>
                {/* Phone number Input */}
                <div className="mt-6 flex justify-center">
                    <input name="phone" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="text" placeholder="Phone" />
                </div>

                {/* Address Input */}
                <div className="mt-6 flex justify-center">
                    <input name="address" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="text" placeholder="Address" />
                </div>
                {/* DOB Input */}
                <div className="mt-6 flex justify-center">
                    <input name="dob" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300 
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="text" placeholder="DOB (DD/MM/YY)" />
                </div>
                {/* Salary Input */}
                <div className="mt-6 flex justify-center">
                    <input name="salary" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300 
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="number" placeholder="Salary" />
                </div>
                {/* Position Input */}
                <div className="mt-6 flex justify-center">
                    <input name="position" className="text-sm px-4 py-1 border w-80 rounded-md border-gray-300 
                                      focus:border-gray-200 focus:outline-none focus:border-2  placeholder-white"
                        type="text" placeholder="Current Position" />
                </div>

                <div className=" mt-6 flex justify-center flex-col items-center">
                    <Link
                        to="/login"
                        className="text-sm text-black hover:underline mb-3"
                    >
                        Already have an account? Login
                    </Link>
                    <button type="submit" className="bg-blue-500 px-6 py-2 font-bold text-white rounded-md hover:bg-blue-600 transition-colors
                                                      cursor-pointer mb-4"
                    >
                        Get-In</button>

                </div>
            </form>
        </div>

    )
}

