import React, { useState } from 'react'
import './../styles/profile.css'
import EditProfile from '../components/EditProfile'

const Profile = () => {

  const [isEditOpen , setIsEditOpen] = useState(false);

  return (
    <>
    <div className={`profile-page ${isEditOpen ? 'blur' : ''}`}>
        <div class="profile-container">
            <div className='profile-pfp myprofile' ></div>    

            <div id='names'>
                <h2>Diya Dabhi</h2>
                <h4>@kitu</h4>
            </div>

            <p>Adaptation to circumstances is the route to success </p>

            <span>0Posts ● 0Follower ● 0Following</span>  

            <button id='edit' onClick={() => setIsEditOpen(true)}>Edit Profile</button>     

            <EditProfile />
            
        </div>
    </div>

    {isEditOpen && <EditProfile isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />}
    </>
  )
}

export default Profile