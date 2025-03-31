import React, { useState } from 'react'
import './../styles/editprofile.css'
import ProfileContent from './ProfileContent';
import AccountContent from './AccountContent';
import PasswordContent from './PasswordContent';


const EditProfile = ({ isOpen , onClose }) => {
    if(!isOpen) return null;

    const [activeTab , setActiveTab] = useState('Profile');

    const renderContent = () => {
        switch(activeTab){
            case 'Profile' :
                return <ProfileContent />;
            
            case 'Account' :
                return <AccountContent />;

            case 'Password' :
                return <PasswordContent />;

            default:
                return <ProfileContent />;
        }
    }

    

  return (
    <>
    <div id="edit-overlay">

    <div id="edit-profile-page">
        <div id='edit-sidebar'>
            <div className='profile-pfp myprofile'></div>

            <div id="edit-tabs">
                <div id="tab-options">
                    <button className={activeTab === 'Profile' ? 'active' : ''} onClick={() => setActiveTab('Profile')}>Profile</button>
                    <button className={activeTab === 'Account' ? 'active' : ''} onClick={() => setActiveTab('Account')}>Account</button>
                    <button className={activeTab === 'Password' ? 'active' : ''} onClick={() => setActiveTab('Password')}>Password</button>
                </div>

                <div id="tab-footer">
                    <h2>cre8space</h2>
                </div>
            </div>

        </div>

        <div id="edit-content">
            
            <div id="edit-nav">
                <div id="tab-name">
                    <h2>{activeTab}</h2>
                </div>
                <button onClick={onClose}>❌</button>
            </div>

            <div id="tab-content">
                {renderContent()}
            </div>
        </div>
    </div>

    </div>
    </>
  )

  
}

export default EditProfile