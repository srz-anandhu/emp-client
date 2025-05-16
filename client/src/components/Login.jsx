import Header from "./Header";

export default function() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
            <Header />
            <form className="w-96 bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg shadow-2xl ">
                <h2 className="text-2xl font-bold text-center my-2">Login!</h2>

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