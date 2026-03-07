import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify"
import axios from 'axios'
export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : "")
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])

    const getAlldoctors = async () => {
        try {
            // const {data}=await axios.get(backendUrl+'api/admin/all-doctors',{
            //     headers:{aToken}
            // })
            const { data } = await axios.get("http://localhost:3456/api/admin/all-doctors", {
                headers: { aToken }
            })
            if (data.success) {
                setDoctors(data.doctors);
                // console.log(data.doctors)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    const changeAvailability = async (docId) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAlldoctors()
            } 
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    const value = {
        aToken, setAToken, backendUrl, doctors, getAlldoctors,changeAvailability
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider