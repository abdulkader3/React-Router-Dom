import React from 'react'
import Navbar from '../components/Navbar'

const Ami = () => {
  return (
    <>
    <Navbar/>
    <div className=" flex justify-center items-center w-full h-screen">
        <img className=' w-[50%]' src="./photos/me.avif" alt="ami" />
    </div>
    </>
  )
}

export default Ami
