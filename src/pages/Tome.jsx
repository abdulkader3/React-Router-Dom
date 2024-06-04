import React from 'react'
import Navbar from '../components/Navbar'

const Tome = () => {
  return (
   <>
   <Navbar/>
   <div className=" flex justify-center items-center w-full h-screen">
        <img className=' w-[50%]' src="./photos/you.jpg" alt="dont care" />
    </div>
   </>
  )
}

export default Tome
