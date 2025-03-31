import React from 'react'
import './../styles/landing.css'
import './../styles/signup.css'

const SignUp = () => {
  return (
    <>
    <div id='signup-page'>
        <div id="ball1"></div>
        <div id="ball2"></div>
        <div id="ball3"></div>
        <div id="ball4"></div>

        <div id="signup-form">
            <form action="#">
                <h2>Welcome to cre8space</h2>
                <p>Discover by creating an account</p>

                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" placeholder=""/>
                </div>

                <div className="input-box">
                    <label>Username</label>
                    <input type="text" placeholder=""/>
                </div>

                <div className="input-box">
                    <label>Email</label>
                    <input type="email" placeholder=""/>
                </div>

                <div className="input-box">
                    <label>Password</label>
                    <input type="password" placeholder=""/>
                </div>

                <button className='form-btn'>Sign-Up</button>

                <p>or</p>
                <p><a href="LogIn">Log-In</a></p>

            </form>
        </div>

    </div>
    </>
  )
}

export default SignUp