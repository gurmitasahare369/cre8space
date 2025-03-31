import React from 'react'
import './../styles/postform.css'
import { Images } from 'lucide-react';

const Postform = ({ isOpen, onClose }) => {
        if(!isOpen) return null;

  return (
    <>
    <div id="post-overlay">
        
    <div id='post-form'>
        <div id='create-container'>

            <div id='create-header'>
                <h2>Create Post</h2>
                <button id='cancel' onClick={onClose}>❌</button>
            </div>

            <div id='create-content'>
                <label htmlFor="Title">Title</label>
                <input id='heading' type='text' placeholder='Title'/>

                <label htmlFor="Title">Description</label>
                <textarea name="" id="description" maxLength={200} placeholder='Description'></textarea>

                <label htmlFor="">Add Image</label>
                <div id='image-container'></div>

                <div id='create-footer'>
                    <div id='icons'>
                        <a href=""><Images /></a>
                    </div>
                    <button id='add-post'>Post</button>
                </div>
            </div>


        </div>
    </div>

    </div>
    </>
  )
}

export default Postform