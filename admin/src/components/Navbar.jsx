import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
    const navigate=useNavigate();
  const logout = () => {
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
      navigate('/')
    }
  };

  return (
    <header className="w-full backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img
            className="w-32 sm:w-40 cursor-pointer transition-transform duration-300 hover:scale-105"
            src={assets.admin_logo}
            alt="Admin Logo"
          />

          <span className="hidden sm:flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow">
            Admin Panel
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Profile Avatar */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <p className="text-sm font-medium text-gray-700">Admin</p>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="px-5 sm:px-7 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;