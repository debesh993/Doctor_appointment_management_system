import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const Doctorslist = () => {
  const { doctors, getAlldoctors, aToken,changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAlldoctors();
    }
  }, [aToken]);

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        All Doctors
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
          >

            {/* Doctor Image */}
            <div className="relative flex justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-13">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />

              {/* Availability Badge */}
              <div className="absolute top-2 left-2 flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow-sm border">

                <input
                onChange={()=>changeAvailability(doc._id)}
                  type="checkbox"
                  checked={doc.available}
                  // readOnly
                  className="accent-green-500"
                />

                <span className="text-xs font-medium text-gray-600">
                  Available
                </span>

              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {doc.name}
              </h2>

              <p className="text-sm text-blue-600 font-medium">
                {doc.speciality}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {doc.degree}
              </p>

              {/* Experience + Fees */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="bg-slate-100 px-3 py-1 rounded-lg">
                  {doc.experience}
                </div>

                <div className="font-semibold text-indigo-600">
                  ${doc.fees}
                </div>
              </div>

              {/* Address */}
              <p className="text-xs text-gray-400 mt-3">
                {doc.address.line1}, {doc.address.line2}
              </p>

              {/* Button */}
              <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctorslist;