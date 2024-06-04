import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className=' p-5'>
      <div className="container">
        <div className="mano-row flex justify-between items-center">
          <div className="logo">
            <img src="./photos/logo.png" alt="logo" />
          </div>
          <div className="manu">
            <ul className=' flex gap-[25px] font-poppins text-[#3ef3fcf5]'>
              <li><Link to="/Ami">Ami</Link></li>
              <li><Link to="/Tome">Tome</Link></li>
              <li><Link to="/Rkewnai">Rkewmai</Link></li>
              <li><Link to="/Rkawkelagbeona">Rkawkelagbeona</Link></li>
              <li><Link to="/Sobbad">Sobbad</Link></li>
            </ul>
          </div>

        </div>
      </div>




    </nav>
    
    
    
    
    
    
    </>
  )
}

export default Navbar
