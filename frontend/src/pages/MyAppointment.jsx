import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          My Appointments
        </h2>

        <div className="space-y-6">
          {doctors.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col md:flex-row gap-6"
            >
              {/* Doctor Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-xl object-cover border"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-indigo-600 text-sm mb-2">
                  {item.speciality}
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium text-gray-700">Address</p>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                </div>

                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-medium">Date & Time:</span> 25 July,
                  2024 | 8:30 PM
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center gap-3 md:w-48">
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Pay Online
                </button>

                <button className="w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
