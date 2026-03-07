import React, { useState, useContext } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";

const Login = () => {

    const [state, setState] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAToken, backendUrl } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {

            if (state === "Admin") {

                const { data } = await axios.post(
                    backendUrl + "/api/admin/login",
                    { email, password }
                );

                if (data.success) {
                    console.log(data.token);
                    setAToken(data.token);
                    localStorage.setItem("aToken", data.token);
                }else {
                toast.error(data.message);   
            }

            }

        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

            <form
                onSubmit={onSubmitHandler}
                className="w-full max-w-md bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/30"
            >

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={assets.logo}
                        alt="logo"
                        className="w-20 drop-shadow-lg"
                    />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                    {state} Login
                </h2>

                {/* Toggle Buttons */}
                <div className="flex bg-white/30 rounded-full p-1 mb-6">

                    <button
                        type="button"
                        onClick={() => setState("Admin")}
                        className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
                            state === "Admin"
                                ? "bg-white text-purple-600 shadow"
                                : "text-white"
                        }`}
                    >
                        Admin
                    </button>

                    <button
                        type="button"
                        onClick={() => setState("Doctor")}
                        className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${
                            state === "Doctor"
                                ? "bg-white text-purple-600 shadow"
                                : "text-white"
                        }`}
                    >
                        Doctor
                    </button>

                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-white text-sm font-medium">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="text-white text-sm font-medium">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-white text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300 shadow-lg"
                >
                    Login
                </button>

                {/* Footer */}
                <p className="text-center text-xs text-white mt-6 opacity-80">
                    Secure Admin & Doctor Panel
                </p>

            </form>
        </div>
    );
};

export default Login;