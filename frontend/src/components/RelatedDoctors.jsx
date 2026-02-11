import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate=useNavigate()

    const [relDoc,setRelDocs] = useState([])

    useEffect(()=>{
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=> doc.speciality===speciality && doc._id!==docId)
            setRelDocs(doctorsData)
        }
    },[doctors,speciality,docId])

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
          Top Doctors to Book
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Simply browse through our extensive list of trusted doctors and
          schedule your appointment hassle-free.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-6">
        
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            className="bg-white rounded-2xl shadow-md 
                       hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300 cursor-pointer 
                       overflow-hidden"
          >
            {/* Image */}
            <div className="bg-blue-50 flex items-center justify-center h-56">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              
              {/* Availability */}
              <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              {/* Speciality */}
              <p className="text-gray-500 text-sm mt-1">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">more</button>
    </section>
  )
}

export default RelatedDoctors