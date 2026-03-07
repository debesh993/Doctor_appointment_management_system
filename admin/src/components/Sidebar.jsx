import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: assets.home_icon,
    },
    {
      name: "Appointments",
      path: "/all-appointments",
      icon: assets.appointment_icon,
    },
    {
      name: "Add Doctor",
      path: "/add-doctor",
      icon: assets.add_icon,
    },
    {
      name: "Doctors List",
      path: "/doctor-list",
      icon: assets.people_icon,
    },
  ];

  return (
    aToken && (
      <aside className="min-h-screen bg-white border-r shadow-sm w-16 sm:w-64 transition-all duration-300">
        <ul className="flex flex-col gap-2 p-3">

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                }`
              }
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 group-hover:scale-110 transition"
              />

              <p className="hidden sm:block text-sm font-medium">
                {item.name}
              </p>
            </NavLink>
          ))}

        </ul>
      </aside>
    )
  );
};

export default Sidebar;