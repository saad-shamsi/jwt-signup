'use client'
import Link from "next/link"
import React,{useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import { connect } from "http2"



const SignupPage = () => {
  const router = useRouter()
    const [user,setUser]= useState({
    userName:"",
    email:"",
    password:"",

    })
    const [buttonDisbaled,setButoonDisbaled]=useState(false)
    const [loading,setLoading]= useState(false)
    const onSignUp =async()=>{
      try {
        setLoading(true)
        const response = await axios.post(`/api/users/signup`, user)
        console.log("signup success",response.data)
        router.push("/login")
      }
       catch (error:unknown) {
        console.log('Signup failed', error)
      }
      finally{
        setLoading(false)
      }
    }
useEffect(()=>{
  if (user.password.length>0 && user.email.length>0 && user.userName.length>0) {
    setButoonDisbaled(false)
  } else {
    setButoonDisbaled(true)
  }
},[user])
 
  return (
    <div className="flex flex-col items-center justify-centern main-h-scree  py-2">
   <h1 className="text-2xl">{loading? "Procssing":"Signup"}</h1>
   <hr />
   <label htmlFor="userName">userName</label>
   <input 
   className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="text" 
   id="userName" 
   value={user.userName} 
   placeholder="userName"
    onChange={(e)=>setUser({...user,userName: e.target.value})}
    />
      <label htmlFor="email">email</label>
   <input 
   className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="email" 
   id="email" 
   value={user.email} 
   placeholder="email"
    onChange={(e)=>setUser({...user,email: e.target.value})}
    />

   <label htmlFor="password">password</label>
   <input 
   className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="password" 
   id="password" 
   value={user.password} 
   placeholder="password"
    onChange={(e)=>setUser({...user,password: e.target.value})}
    />
 <button
 onClick={onSignUp}
  className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisbaled? "No Signup" : "Signup"}</button>
   <Link href='/login'>Visit the Page</Link>
    </div>
  )
}

export default SignupPage