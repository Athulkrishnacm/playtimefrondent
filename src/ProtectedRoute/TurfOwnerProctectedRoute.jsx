import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
import {AxiosTurfOwner} from '../API/AxiosInstance'


export default function TurfOwnerProtectedRoutes() {
    const Navigate=useNavigate()
    const [turfOwnerCheck,setTurfOwnerCheck]=useState(false)
    useEffect(()=>{
        const token =localStorage.getItem('turfToken')
        console.log(token,"123456789");
        const headers={Authorization :token}
        console.log(headers,"asdfghjkkk");
        AxiosTurfOwner.get(`authenticate`,{headers}).then((response)=>{
          console.log(response,"123456qwertyusdfghvb");
            setTurfOwnerCheck(response.data.authorization)
            console.log(turfOwnerCheck,"1q2w3e4r");
        }).catch(()=>{
            setTurfOwnerCheck(false)
            Navigate('/login')
        })
    },[])
  return (
    turfOwnerCheck && <Outlet/>
  )
}