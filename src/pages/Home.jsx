import React, { useState } from 'react'
import './../styles/home.css'
import './../components/Home_nav'
import Home_nav from './../components/Home_nav'
import Sidebar from '../components/Sidebar'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import Toggle from './../components/Toggle'
import Postform from '../components/Postform'
import ProfileMenu from '../components/ProfileMenu'

const Home = () => {

  const [isPostFormOpen , setIsPostFormOpen] = useState(false);
  const [isMenuOpen , setIsMenuOpen] = useState(false);


  return (
    <>
    <div className={`homepage ${isPostFormOpen ? 'blur' : ''}`}>
      <Home_nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar setIsPostFormOpen={setIsPostFormOpen} isPostFormOpen={isPostFormOpen} />
      <CreatePost setIsPostFormOpen={setIsPostFormOpen} isPostFormOpen={isPostFormOpen}/>
      <Post />
      <div id='home-toggle'>
      <Toggle />
      </div>
    </div>
    {isPostFormOpen && <Postform isOpen={isPostFormOpen} onClose={() => setIsPostFormOpen(false)} />}
    {isMenuOpen && <ProfileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>}
    </>
  )
}

export default Home