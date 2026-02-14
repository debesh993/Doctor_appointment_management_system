import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      className="bg-gray-50 py-16 px-4 md:px-8"
      
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Find by Speciality
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Browse through our extensive list of trusted doctors and schedule
          your appointment easily.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 " id="top-doctors" >
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              id="speciality"
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-indigo-50 p-4 rounded-full mb-4 group-hover:bg-indigo-100 transition">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  src={item.image}
                  alt={item.speciality}
                />
              </div>

              <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
