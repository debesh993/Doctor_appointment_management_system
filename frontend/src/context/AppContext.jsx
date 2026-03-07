import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [doctors,setDoctors]=useState([])
    const [userData,setUserData]=useState(false)
    const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const currrencySymbol="$"
    const backendUrl=import.meta.env.VITE_BACKEND_URL
   
    const getAlldoctors = async () => {
        try {
            // const {data}=await axios.get(backendUrl+'api/admin/all-doctors',{
            //     headers:{aToken}
            // })
            const { data } = await axios.get(backendUrl+"/api/doctor/list")
            if (data.success) {
                setDoctors(data.doctors);
                // console.log(data.doctors)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    } 
    useEffect(()=>{
        getAlldoctors()
    },[])
    const loadUserProfileData=async()=>{
        try{
            const { data } = await axios.post(backendUrl+"/api/user/get-profile",{},{headers:{token}})
            if (data.success) {
                setUserData(data.userData);
                // console.log(data.userData)
            }
        }catch(error){
            toast.error(error?.response?.data?.message);
        }
    }
    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])
    const value = {
        doctors,currrencySymbol,token,setToken,backendUrl,userData,setUserData,loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
