import React from 'react'
import './../styles/navbar.css'
import Toggle from './Toggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div id='navbar'>
    <nav>
        <h2>cre8space</h2>
        <div id='nav-2'>
            <a href="/discover">Discover</a>
            <Link to='/login'>
              <button className='nav-btn'>LogIn</button>
            </Link>

            <Link to='/signup'>
              <button className='nav-btn'>SignUp</button>
            </Link>
        </div>
    </nav>

    <div id='part-2'>
      <Toggle />
    </div>

    </div>
    </>
  )
}

export default Navbar