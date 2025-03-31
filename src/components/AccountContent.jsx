import React from 'react'
import './../styles/accountcontent.css'


const AccountContent = () => {
  return (
    <>
    <div id='profile-content-page'>
       <div id="profile-form">
        <form action="#">
            <div className="profile-input">
                <label>Email</label>
                <input type="email" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>Date of Birth</label>
                <input type="date" placeholder=""/>
            </div>
            <div className="profile-input">
                <label>Gender</label>
                <div id='gender'>
                    <div className='gender-fields'>
                        <label>Female</label> 
                        <input type="radio" />
                    </div>
                    <div className='gender-fields'>
                        <label>Male</label> 
                        <input type="radio" />
                    </div>
                    <div className='gender-fields'>
                        <label>Non-Binary</label> 
                        <input type="radio" />
                    </div>                     
                                     
                </div>
            </div>
        </form>
       </div>
       <button>Save</button>
    </div>
    </>
  )
}

export default AccountContent