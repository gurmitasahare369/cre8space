import React from 'react'
import './../styles/profilemenu.css'
import { LogOut } from 'lucide-react';

const ProfileMenu = ({ isOpen, onClose }) => {
    if(!isOpen) return null;

  return (
    <>
    <div id='menu-container' onMouseLeave={onClose}>
        <div id='menu'>

            <a href="/profile"><div id='pfp' className='myprofile'></div></a>
            <div id='menu-pt1'>
                <a href="/profile"><h3>@kitu</h3></a>
                <p>0Following ● 1Follower</p>                
            </div>

            <div id='menu-pt2'>
                <button><LogOut size={16}/>Logout</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfileMenu