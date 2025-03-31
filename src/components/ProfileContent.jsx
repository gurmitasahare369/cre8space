import React from 'react'
import './../styles/profilecontent.css'

const ProfileContent = () => {
  return (
    <>
    <div id='profile-content-page'>
       <div id="profile-form">
        <form action="#">
            <div className="profile-input">
                <label>Username</label>
                <input type="text" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>Fullname</label>
                <input type="text" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>Bio</label>
                <textarea id='edit-bio' maxLength={200}></textarea>
            </div>
        </form>
       </div>
       <button>Save</button>
    </div>
    </>
  )
}

export default ProfileContent