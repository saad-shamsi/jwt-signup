'use client'
import Link from "next/link"
import React,{useState} from "react"
import {useRouter} from "next/navigation"
import { axios } from "axios"


const signupPage = () => {
    const [user,setUser]= useState({
    userName:"",
    email:"",
    password:"",

    })
    const onSignUp =async()=>{

    }
  return (
    <div className="flex flex-col items-center justify-centern main-h-scree  py-2">
   <h1 className="text-2xl">Signup</h1>
   <hr />
   <label htmlFor="username">username</label>
   <input 
   className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
   type="text" 
   id="username" 
   value={user.userName} 
   placeholder="username"
    onChange={(e)=>setUser({...user,userName: e.target.value})}
    />
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
 onClick={onSignUp}
  className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>
   <Link href='/login'>Visit the Page</Link>
    </div>
  )
}

export default signupPage