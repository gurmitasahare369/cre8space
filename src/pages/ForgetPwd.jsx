import React from 'react'
import './../styles/forgetpwd.css'
import  './../styles/landing.css'

const ForgetPwd = () => {
  return (
    <>
    <div id='forget-pwd-page'>
        <div id="ball1"></div>
        <div id="ball2"></div>
        <div id="ball3"></div>
        <div id="ball4"></div>

        <div id="pwd-form">
            <form action="#">
                <h2>Forget Password</h2>
                
                <div className="input-box">
                    <label>Username or Email</label>
                    <input type="text" placeholder=""/>
                </div>

                <button className='form-btn'>Enter</button>

                <p>or</p>
                <p><a href="LogIn">Log-In</a></p>
            </form>

        </div>

    </div>
    </>
  )
}

export default ForgetPwd