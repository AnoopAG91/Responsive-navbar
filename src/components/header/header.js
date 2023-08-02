import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const [ismobile, setIsMobile] = useState(false)

  return (
    <div className='header-container'>
        <div className='logo'>
            <Link to={"/"}>LOGO</Link>
        </div>

        <div className='navbar'>
            <nav className={ismobile ? "mobile-navbar" : "desktop-navbar"}  // 
            onClick={()=> setIsMobile(false)}
            >
                <Link to={"/"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
                <Link to={"/services"}>SERVICES</Link>
                <Link to={"/contact"}>CONTACT US</Link>
            </nav>
        </div>
       
          <button className='toggle-Btn' 
          onClick={()=> setIsMobile(!ismobile)}
          >
            { ismobile? ( <FontAwesomeIcon icon={faTimes}/> ) : ( <FontAwesomeIcon icon={faBars} /> ) }
          </button>
          
    </div>
  )
}

export default Header