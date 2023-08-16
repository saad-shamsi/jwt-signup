"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import {toast} from "react-hot-toast"
import axios from 'axios'

import { useRouter } from 'next/navigation'
const ProfilePage = () => {
  const [data,setData]=useState("nothing")
  const router = useRouter()
  async function logout() {
   try {
   await  axios.post("/api/users/logout")
   toast.success("Logout successful")
   
   router.push("/login")
   } catch (error:any) {
    toast.error(error.message )
   }
  } 
  async function getUserDetails() {
    const res= await axios.get('/api/users/me')
    console.log(res.data.data._id)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <h1>Profile</h1>
    <hr />
    <p>Profile page</p>
    <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link> }</h2>
    <hr />
    <button onClick={logout} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 '>Logout</button>
    <button onClick={getUserDetails} className='bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 '>get User id</button>
    </div>
  )
}

export default ProfilePage