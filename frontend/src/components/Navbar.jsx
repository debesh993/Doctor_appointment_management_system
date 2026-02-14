import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navLinkStyle = ({ isActive }) =>
    `relative px-2 py-1 transition ${
      isActive
        ? "text-indigo-600 font-semibold"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="w-36 md:w-40 cursor-pointer"
          src={assets.logo}
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={navLinkStyle}>
            HOME
          </NavLink>
          <NavLink to="/doctors" className={navLinkStyle}>
            ALL DOCTORS
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            CONTACT
          </NavLink>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {token ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  className="w-9 h-9 rounded-full object-cover border"
                  src={assets.profile_pic}
                  alt=""
                />
                <img
                  className="w-3 opacity-70"
                  src={assets.dropdown_icon}
                  alt=""
                />
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <div className="py-2 text-sm text-gray-700">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm transition"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 cursor-pointer md:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <img className="w-32" src={assets.logo} alt="" />
          <img
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 p-6 text-gray-700 font-medium">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="py-2 px-3 rounded-lg hover:bg-gray-100"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/doctors"
            className="py-2 px-3 rounded-lg hover:bg-gray-100"
          >
            All Doctors
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="py-2 px-3 rounded-lg hover:bg-gray-100"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className="py-2 px-3 rounded-lg hover:bg-gray-100"
          >
            Contact
          </NavLink>

          {!token && (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="mt-4 bg-indigo-600 text-white py-2 rounded-lg"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
