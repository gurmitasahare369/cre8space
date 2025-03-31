import React from 'react'
import './../styles/createpost.css'
import './Postform'
import Postform from './Postform'
import { Images } from 'lucide-react'

const CreatePost = ({ setIsPostFormOpen , isPostFormOpen }) => {
  return (
    <>
    <div id='createpost' onClick={() => setIsPostFormOpen(true)}>

        <div id='cre-post1'>
            <div id='pfp' className='myprofile'></div>
            <textarea id='write-post' name="createpost" placeholder="What's on your mind?"></textarea>
        </div>

        <div id="cre-post2">
            <a href=""><Images size={20} /></a>
            <button>Post</button>
        </div>
    </div>

    <div id='plus'>
         <button onClick={() => setIsPostFormOpen(true)} id='post-btn'>➕</button>
    </div>

    <Postform />
    </>
  )
}

export default CreatePost