import React from 'react'
import './../styles/post.css'
import { Heart, Pencil, Trash2 } from 'lucide-react'

const Post = () => {
  return (
    <>
    <div className='post-container'>

      <div id='post-sections'>

        <div id='post-header'>
          <div id='pfp' className='userprofile'></div>

          <div id='post-info'>
            <p id='name-time'><span id='nt1'>@luna</span><span id='nt2'>12h</span></p>
            <p id='title'>My first post</p> 
            <p id='desc'>Today im going to make my first post here...I am very happy about it..Ayo !!</p>
            <div id='post-content'></div>    
          </div>

        </div>

        <div id='post-action'>

          <div id='action1'>
            <a href=""><Heart /></a>
            <a href=""><Pencil /></a>
          </div>

          <div id='delete'>
            <a href=""><Trash2 /></a>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Post