import React from 'react'
import './../styles/landing.css'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <div id="landing">
      <Navbar />
      <h2 id='moto'>create <span>●</span> connect <span>●</span> inspire</h2>
      <br />
      <h3>A creative space for artists.</h3>
      <div id="ball1"></div>
      <div id="ball2"></div>
      <div id="ball3"></div>
      <div id="ball4"></div> 
    </div>
    </>
  )
}

export default Landing