import React from 'react'
import './../styles/landing.css'
import './../styles/login.css'

const LogIn = () => {
  return (
   <>
    <div id='login-page'>  
        <div id="ball1"></div>
        <div id="ball2"></div>
        <div id="ball3"></div>
        <div id="ball4"></div>

        <div id='login-form'>
            <form action="#">
                <h2>Log In</h2>

                <div className="input-box">
                    <label>Username</label>
                    <input type="text" placeholder=""/>
                </div>

                <div className="input-box">
                    <label>Password</label>
                    <input type="password" placeholder=""/>
                </div>

                <div className="remember-forget">
                    <input type="checkbox" />
                    <label>Remember Me</label>
                    <a href="/forget_pwd" id='forget-pwd'>Forget Password?</a>
                </div>

                <div className="register-link">
                    <p>Don't have an account? <a href="SignUp">Create Account</a></p>
                </div>

                <button type='submit' className='form-btn'>Log In</button>

            </form>
        </div>

    </div>
   </> 
  )
}

export default LogIn