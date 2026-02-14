import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">

      {/* ===== Title Section ===== */}
      <div className="text-center pt-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ===== About Content ===== */}
      <div className="mt-14 flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[420px] rounded-2xl shadow-lg object-cover"
            src={assets.about_image}
            alt="About Prescripto"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 text-gray-600 space-y-6 text-base leading-relaxed">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. We understand the
            challenges individuals face when scheduling doctor appointments and
            managing health records.
          </p>

          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously enhance our platform with modern solutions to improve
            user experience and deliver superior service.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p>
              Our vision is to create a seamless healthcare experience for
              everyone. We aim to bridge the gap between patients and healthcare
              providers, making access to care simple and stress-free.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Why Choose Us ===== */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
          <h4 className="font-semibold text-lg mb-3">Efficiency</h4>
          <p className="text-sm leading-relaxed">
            Streamlined appointment scheduling designed to fit seamlessly into
            your busy lifestyle.
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
          <h4 className="font-semibold text-lg mb-3">Convenience</h4>
          <p className="text-sm leading-relaxed">
            Access a network of trusted healthcare professionals near you with
            just a few clicks.
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
          <h4 className="font-semibold text-lg mb-3">Personalization</h4>
          <p className="text-sm leading-relaxed">
            Tailored recommendations and reminders to help you stay on top of
            your health journey.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
