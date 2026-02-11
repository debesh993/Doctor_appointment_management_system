import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center 
                    bg-blue-400 rounded-2xl 
                    px-6 sm:px-10 md:px-14 
                    my-16 md:mx-10 
                    overflow-hidden">

      {/* -------- Left Side -------- */}
      <div className="flex-1 py-10 md:py-16 lg:py-20">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                        font-semibold text-white leading-tight">
          <p>Book Appointment</p>
          <p className="mt-3">With 100+ Trusted Doctors</p>
        </div>

        <button
          onClick={() => (navigate("/login"), window.scrollTo(0, 0))}
          className="bg-white text-sm sm:text-base 
                     text-gray-700 px-8 py-3 
                     rounded-full mt-8 
                     hover:scale-105 hover:shadow-lg
                     transition-all duration-300"
        >
          Create account
        </button>
      </div>

      {/* -------- Right Side -------- */}
      <div className="w-full md:w-1/2 lg:w-[380px] 
                      flex justify-center md:justify-end 
                      mt-8 md:mt-0">

        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md 
                     object-contain"
        />
      </div>

    </div>
  );
};

export default Banner;
