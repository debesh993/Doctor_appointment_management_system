import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsedit] = useState(false);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUserProfileData = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("dob", userData.dob);
      formData.append("gender", userData.gender);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsedit(false);
        setImage(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    userData && (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-6 md:p-10">
          
          {/* Top Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-8">

            {/* PROFILE IMAGE */}
            {isEdit ? (
              <label htmlFor="image">
                <div className="relative group cursor-pointer">

                  <img
                    className={`w-36 h-36 rounded-full object-cover border-4 border-indigo-200 shadow-lg transition-all duration-500
                    ${
                      image
                        ? "scale-105 ring-4 ring-indigo-400"
                        : "opacity-80 group-hover:scale-105"
                    }`}
                    src={image ? URL.createObjectURL(image) : userData.image}
                    alt=""
                  />

                  {!image && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition">
                      <img className="w-8" src={assets.upload_icon} alt="" />
                    </div>
                  )}
                </div>

                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
            ) : (
              <img
                src={userData.image}
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-md"
              />
            )}

            {/* NAME + EMAIL */}
            <div className="flex-1 text-center md:text-left">
              {isEdit ? (
                <input
                  type="text"
                  className="text-2xl text-center md:text-left font-semibold border-b border-gray-300 focus:outline-none focus:border-indigo-500"
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

            {/* BUTTON */}
            <div>
              {isEdit ? (
                <button
                  onClick={updateUserProfileData}
                  disabled={loading}
                  className="px-6 py-2 flex items-center gap-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-60"
                >
                  {loading && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}

                  {loading ? "Saving..." : "Save"}
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

          {/* CONTACT INFO */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 border-b pb-2">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* PHONE */}
              <div>
                <p className="text-sm text-gray-500">Phone</p>

                {isEdit ? (
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p className="text-gray-800 mt-1">{userData.phone}</p>
                )}
              </div>

              {/* ADDRESS */}
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
                          address: {
                            ...prev.address,
                            line1: e.target.value,
                          },
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
                          address: {
                            ...prev.address,
                            line2: e.target.value,
                          },
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

          {/* BASIC INFO */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 border-b pb-2">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* GENDER */}
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
                      setUserData((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
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
    )
  );
};

export default MyProfile;