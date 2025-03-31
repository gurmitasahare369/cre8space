import React from 'react'
import './../styles/passwordcontent.css'

const PasswordContent = () => {
  return (
    <>
    <div id='profile-content-page'>
       <div id="profile-form">
        <form action="#">
            <div className="profile-input">
                <label>Current Password</label>
                <input type="password" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>New Password</label>
                <input type="password" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>Confirm New Password</label>
                <input type="password" placeholder=""/>
            </div>
        </form>
       </div>
       <button>Save</button>
    </div>
    </>
  )
}

export default PasswordContent