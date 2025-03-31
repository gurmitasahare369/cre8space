import React from 'react'
import FollowBtn from '../components/FollowBtn'

const UserProfile = () => {
  return (
    <>
    <div className="profile-page">
        <div className="profile-container">
            <div className='profile-pfp userprofile'></div>    

            <div id='names'>
                <h2>Luna Kim</h2>
                <h4>@luna</h4>
            </div>

            <p>A celestial wonderer, captivated by the moon's magic ✨</p>

            <span>0Posts ● 0Follower ● 0Following</span>  

            <FollowBtn />
        </div>
    </div>
    </>
  )
}

export default UserProfile