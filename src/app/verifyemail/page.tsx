"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
    // may an error
  }),[token];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl ">Verify Email</h1>
        <h2 className="text-black p-3 bg-yellow-400 te">{token? `${token}`:"No token"}</h2>
        {
            verified && (
                <div>
                   <h2 className="text-2xl">Email Verified</h2> 
                   <Link className="text-blue-500" href={"/login"}>Login</Link>
                </div>
            )
        }
        {
            error && (
                <div>
                   <h2 className="text-2xl bg-red-800">Error Verified</h2> 
                   
                </div>
            )
        }
    </div>
  )
}
