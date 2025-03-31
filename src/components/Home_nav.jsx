import React from 'react'
import './../styles/home_nav.css'
import ProfileMenu from './ProfileMenu'

const Home_nav = ({ isMenuOpen , setIsMenuOpen }) => {
  return (
    <>
    <div id='home-nav'>
        <div id='home-nav-1'>
            <a href="/home"><h1>cre8space</h1></a>
            <a href="#"><div className='myprofile' id='profile-pic' onMouseEnter={() => setIsMenuOpen(true)}></div></a>
        </div>
    </div>

    <ProfileMenu />
    </>
  )
}

export default Home_nav