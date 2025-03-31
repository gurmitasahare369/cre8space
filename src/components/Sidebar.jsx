import React from 'react'
import './../styles/sidebar.css'
import Postform from './Postform'
import { Compass, CopyPlus, House, LogOut } from 'lucide-react'

const Sidebar = ({ setIsPostFormOpen , isPostFormOpen }) => {
  return (
    <>
    <div id='sidebar'>
        <div id='inner'>
            <a href="/home"><House /><h2> Home</h2></a>
            <a href="/discover"><Compass /><h2>Explore</h2></a>
            <a href="#" onClick={() => setIsPostFormOpen(true)}><CopyPlus /><h2>Post</h2></a>
            <a href=""><LogOut /><h2>Log Out</h2></a>
        </div>
    </div>
    <Postform />
    </>
  )
}

export default Sidebar