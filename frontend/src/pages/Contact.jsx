import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">

      {/* ===== Title ===== */}
      <div className="text-center pt-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          CONTACT <span className="text-blue-600">US</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full max-w-[500px] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-6 border">

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Office
            </h3>
            <p className="text-gray-600 leading-relaxed">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
          </div>

          <div className="text-gray-600 leading-relaxed">
            <p>
              <span className="font-medium text-gray-800">Tel:</span> (000) 000-0000
            </p>
            <p>
              <span className="font-medium text-gray-800">Email:</span> greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Careers at Prescripto
            </h3>
            <p className="text-gray-600">
              Learn more about our teams and job openings.
            </p>
          </div>

          <button className="mt-4 w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Explore Jobs
          </button>

        </div>
      </div>

      {/* ===== Decorative Bottom Spacing ===== */}
      <div className="mt-20"></div>

    </div>
  );
};

export default Contact;
