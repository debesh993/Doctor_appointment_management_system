import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currrencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // ---------- Fetch Doctor ----------
  useEffect(() => {
    if (doctors.length > 0) {
      const doctor = doctors.find((doc) => doc._id.toString() === docId);
      setDocInfo(doctor);
    }
  }, [doctors, docId]);

  // ---------- Generate Slots ----------
  useEffect(() => {
    if (!docInfo) return;

    const generateSlots = () => {
      const slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(
            currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
          );
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }

        const timeSlots = [];

        while (currentDate < endTime) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        slots.push(timeSlots);
      }

      setDocSlots(slots);
    };

    generateSlots();
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto py-10">
      {/* ---------- Doctor Details ---------- */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            className="bg-primary w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] rounded-2xl shadow-lg object-cover"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Info Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8">
          <p className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            {docInfo.name}
            <img className="w-5 sm:w-6" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base mt-3 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-full bg-gray-50">
              {docInfo.experience}
            </span>
          </div>

          <div className="mt-6">
            <p className="flex items-center gap-2 font-semibold text-gray-800 text-sm sm:text-base">
              About
              <img className="w-4" src={assets.info_icon} alt="" />
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-2 max-w-[700px]">
              {docInfo.about}
            </p>
          </div>

          <p className="text-gray-600 font-medium mt-6 text-sm sm:text-base">
            Appointment Fee :
            <span className="text-gray-900 font-semibold ml-2">
              {currrencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* ---------- Booking Section ---------- */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-800">Booking Slots</p>

        {/* Day Selector */}
        <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => {
              // Only render if this specific day has time slots
              if (item.length > 0) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSlotIndex(index);
                      setSlotTime("");
                    }}
                    className={`flex flex-col items-center justify-center min-w-[70px] py-4 rounded-full cursor-pointer transition-all duration-200
            ${
              slotIndex === index
                ? "bg-blue-500 text-white shadow-md"
                : "border border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
                  >
                    <p className="text-sm font-medium">
                      {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                    </p>
                    <p className="text-lg font-semibold">
                      {item[0] && item[0].datetime.getDate()}
                    </p>
                  </div>
                );
              }
              return null; // Skip days with no slots
            })}
        </div>

        {/* Time Selector */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
          {docSlots[slotIndex]?.map((item, index) => (
            <button
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`text-sm px-5 py-2 rounded-full flex-shrink-0 transition-all duration-200
              ${
                item.time === slotTime
                  ? "bg-blue-500 text-white shadow-md"
                  : "border border-gray-300 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {item.time.toLowerCase()}
            </button>
          ))}
        </div>
        <button className="bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
      </div>

      {/*Listing related Doctors*/}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
