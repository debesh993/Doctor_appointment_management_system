import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
    const {backendUrl,aToken}=useContext(AdminContext)
  const [image, setImage] = useState(false)
  const [loading,setLoading] = useState(false)

  const [doctorData,setDoctorData] = useState({
    name:"",
    email:"",
    password:"",
    experience:"1 Year",
    fees:"",
    speciality:"General physician",
    degree:"",
    address1:"",
    address2:"",
    about:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setDoctorData(prev=>({...prev,[name]:value}))
  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault()

    try {

      if(!image){
        return toast.error("Please upload doctor image")
      }

      setLoading(true)

      const formData = new FormData()

      formData.append("image",image)
      formData.append("name",doctorData.name)
      formData.append("email",doctorData.email)
      formData.append("password",doctorData.password)
      formData.append("experience",doctorData.experience)
      formData.append("fees",doctorData.fees)
      formData.append("speciality",doctorData.speciality)
      formData.append("degree",doctorData.degree)
      formData.append("about",doctorData.about)

      formData.append(
        "address",
        JSON.stringify({
          line1:doctorData.address1,
          line2:doctorData.address2
        })
      )
    //   formData.forEach((value,key)=>{
    //     console.log(`${key}:${value}`)
    //   })

      // 🔴 ADD YOUR URL HERE
      const {data} = await axios.post(
        backendUrl+'/api/admin/add-doctor',
        formData,{
            headers:{aToken}
        }
      )

      if(data.success){
        toast.success("Doctor added successfully")

        setDoctorData({
          name:"",
          email:"",
          password:"",
          experience:"1 Year",
          fees:"",
          speciality:"General physician",
          degree:"",
          address1:"",
          address2:"",
          about:""
        })

        setImage(false)

      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

    setLoading(false)
  }

  return (
    <div className="w-full p-6">

      <h1 className="text-2xl font-semibold text-gray-700 mb-6">
        Add Doctor
      </h1>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
      >

        {/* Upload Image */}
        <div className="flex items-center gap-6 mb-8">

          <label htmlFor="doctor-img" className="cursor-pointer">

            <img
              className="w-20 h-20 rounded-full object-cover border-2 border-dashed border-gray-300 p-1 hover:border-indigo-500 transition"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />

          </label>

          <input
            onChange={(e)=>setImage(e.target.files[0])}
            type="file"
            id="doctor-img"
            hidden
          />

          <p className="text-gray-600 text-sm font-medium">
            Upload doctor <br/> picture
          </p>

        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Your name</p>
            <input
              name="name"
              value={doctorData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Speciality</p>
            <select
              name="speciality"
              value={doctorData.speciality}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option>General physician</option>
              <option>Gynecologist</option>
              <option>Dermatologist</option>
              <option>Pediatricians</option>
              <option>Neurologist</option>
              <option>Gastroenterologist</option>
            </select>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Your Email</p>
            <input
              name="email"
              value={doctorData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="email"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Education</p>
            <input
              name="degree"
              value={doctorData.degree}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="text"
              placeholder="Education"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Your Password</p>
            <input
              name="password"
              value={doctorData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Address</p>

            <input
              name="address1"
              value={doctorData.address1}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="text"
              placeholder="Address 1"
            />

            <input
              name="address2"
              value={doctorData.address2}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="text"
              placeholder="Address 2"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Experience</p>

            <select
              name="experience"
              value={doctorData.experience}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
              <option>5 Years</option>
              <option>6 Years</option>
              <option>7 Years</option>
              <option>8 Years</option>
              <option>9 Years</option>
              <option>10 Years</option>
            </select>

          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Fees</p>
            <input
              name="fees"
              value={doctorData.fees}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              type="number"
              placeholder="Your fees"
              required
            />
          </div>

        </div>

        {/* About */}
        <div className="mt-6">

          <p className="text-sm font-medium text-gray-600 mb-2">About me</p>

          <textarea
            name="about"
            value={doctorData.about}
            onChange={handleChange}
            rows="4"
            placeholder="Write about yourself"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          {loading ? "Adding Doctor..." : "Add Doctor"}
        </button>

      </form>
    </div>
  )
}

export default AddDoctor