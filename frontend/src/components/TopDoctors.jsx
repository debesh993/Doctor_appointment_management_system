import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
          Top Doctors to Book
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Browse through our trusted doctors and schedule your appointment easily.
        </p>
      </div>

      {/* Doctors Grid */}
      <div
        className="max-w-7xl mx-auto grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-6"
      >
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="bg-white rounded-xl shadow-sm 
                       hover:shadow-lg hover:-translate-y-1 
                       transition-all duration-300 cursor-pointer 
                       overflow-hidden"
          >
            {/* Image */}
            <div className="bg-indigo-50 flex items-center justify-center h-40">
              <img
                src={item.image}
                alt={item.name}
                className="h-36 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              
              {/* Availability */}
              <div className="flex items-center gap-2 text-xs text-green-600 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available
              </div>

              {/* Name */}
              <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                {item.name}
              </h3>

              {/* Speciality */}
              <p className="text-gray-500 text-xs md:text-sm mt-1 truncate">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 bg-indigo-600 text-white rounded-full 
                     font-medium shadow-md hover:shadow-lg 
                     hover:bg-indigo-700 transition-all duration-300"
        >
          View All Doctors
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;
