import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-500 
                      rounded-3xl overflow-hidden shadow-lg">

        <div className="flex flex-col-reverse md:flex-row items-center">

          {/* Left Content */}
          <div className="md:w-1/2 px-6 sm:px-10 lg:px-16 py-12 md:py-20 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Book Appointment <br />
              With Trusted Doctors
            </h1>

            <p className="mt-6 text-white/90 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Simply browse through our extensive list of trusted doctors and
              schedule your appointment hassle-free.
            </p>

            {/* CTA + Profiles */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">

              <img
                className="w-28"
                src={assets.group_profiles}
                alt=""
              />

              <a
                href="#speciality"
                className="flex items-center gap-2 bg-white text-indigo-600 
                           font-medium px-8 py-3 rounded-full shadow-md
                           hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Appointment
                <img className="w-3" src={assets.arrow_icon} alt="" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center items-end relative">
            <img
              className="w-[85%] sm:w-[75%] md:w-full object-contain"
              src={assets.header_img}
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
