import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <h1></h1>
    <hr />
    <p className='text-4xl '>Profile 
    <span className='p-2 bg-orange-500 ml-2 mt-4 text-black'>{params.id}</span> </p>
    </div>

  )
}

export default UserProfile