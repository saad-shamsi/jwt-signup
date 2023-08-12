'use client'
import Link from "next/link"
import React,{useState} from "react"
import {useRouter} from "next/navigation"
import { Axios } from "axios"


const loginPage = () => {
    const [user,setUser]= useState({
   
    email:"",
    password:"",

    })
    const onlogin =async()=>{

    }
  return (
    <div className="flex flex-col items-center justify-centern main-h-scree  py-2">
   <h1 className="text-2xl">login</h1>
   <hr />
      <label htmlFor="email">email</label>
   <input 
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="email" 
   id="email" 
   value={user.email} 
   placeholder="email"
    onChange={(e)=>setUser({...user,email: e.target.value})}
    />

   <label htmlFor="password">password</label>
   <input 
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="password" 
   id="password" 
   value={user.password} 
   placeholder="password"
    onChange={(e)=>setUser({...user,password: e.target.value})}
    />
 <button
 onClick={onlogin}
  className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
   <Link href='/signup'>Visit the signup  Page</Link>
    </div>
  )
}

export default loginPage