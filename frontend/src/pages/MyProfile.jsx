import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsedit] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        {/* Top Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-8">
          <img
            src={userData.image}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-md"
          />

          <div className="flex-1 text-center md:text-left">
            {isEdit ? (
              <input
                type="text"
                className="text-2xl text-center font-semibold border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <h2 className="text-2xl font-semibold text-gray-800">
                {userData.name}
              </h2>
            )}

            <p className="text-gray-500 mt-1">{userData.email}</p>
          </div>

          <div>
            {isEdit ? (
              <button
                onClick={() => setIsedit(false)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsedit(true)}
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 border-b pb-2">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              {isEdit ? (
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-800 mt-1">{userData.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <p className="text-sm text-gray-500">Address</p>
              {isEdit ? (
                <div className="space-y-2 mt-1">
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-800 mt-1">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 border-b pb-2">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gender */}
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              {isEdit ? (
                <select
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-800 mt-1">{userData.gender}</p>
              )}
            </div>

            {/* DOB */}
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              {isEdit ? (
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-800 mt-1">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
