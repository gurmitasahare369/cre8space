import React, { useState } from 'react'
import ProfileMenu from '../components/ProfileMenu'
import './../styles/discover.css'
import { Search } from 'lucide-react';
import Toggle from './../components/Toggle'


const Discover = ({ isOpen, onClose }) => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    
  return (
    <>
    <div id='home-nav'>
        <div id='home-nav-1'>
            <a href="/home"><h1>cre8space</h1></a>
            <div id='search-bar'>
                <label><Search size={18} /></label>
                <input type="text" placeholder='' />
            </div>
            <div id='discover-toggle'> 
              <Toggle />
            </div>
            <a href="#"><div className='myprofile' id='profile-pic' onMouseEnter={() => setIsMenuOpen(true)}></div></a>
        </div>
    </div>
    
    {isMenuOpen && <ProfileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>}
    </>
  )
}

export default Discover