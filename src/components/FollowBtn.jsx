import React, { useState } from 'react'
import './../styles/followbtn.css'

const FollowBtn = () => {
    const [isfollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing((prev) => (!prev));
    };

  return (
    <>
    <button id='follow-btn' onClick={handleClick}>{isfollowing ? "Unfollow" : "Follow"}</button>
    </>
  )
}

export default FollowBtn