'use client'
import Link from "next/link"
import React,{useState,useEffect} from "react"
import {useRouter} from "next/navigation"
import axios  from "axios"
import {toast} from "react-hot-toast"


const LoginPage = () => {
  const router= useRouter()
  const [loading,setLoading]= useState(false)
  const [buttonDisabled,setButoonDisbaled]= useState(true)
    const [user,setUser]= useState({

    email:"",
    password:"",

    })
    const onLogin =async()=>{
      try {
        setLoading(true)
        const response =await axios.post("/api/users/login",user)
        console.log("login success")
        router.push("/profile")
        
      } catch (error:any) {
      console.log("Login failed",error.message)
      toast.error(error.message)
      }finally
      {
        setLoading(false)
      }
        
    }
    useEffect(()=>{
      if (user.email.length>0 && user.password.length>0) {
        setButoonDisbaled(false)
      } else {
        setButoonDisbaled(true)
      }
    },[user])
  return (
    <div className="flex flex-col items-center justify-centern main-h-scree  py-2">
   <h1 className="text-2xl">{loading? "Login...":"Login"}</h1>
   <hr />
      <label htmlFor="email">email</label>
   <input 
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
   type="email" 
   id="email" 
   value={user.email} 
   placeholder="email"
    onChange={(e)=>setUser({...user,email: e.target.value})}
    />

   <label htmlFor="password">password</label>
   <input 
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
   type="password" 
   id="password" 
   value={user.password} 
   placeholder="password"
    onChange={(e)=>setUser({...user,password: e.target.value})}
    />
 <button
 onClick={onLogin}
  className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled?"No Login":"Login"}</button>
   <Link href='/signup'>Visit the signup  Page</Link>
    </div>
  )
}

export default LoginPage