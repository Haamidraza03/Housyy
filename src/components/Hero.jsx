import React from 'react'
import img from '../components/heroimg.jpg'

function Hero() {
  return (
    <div>
        <center><img src={img} style={{width: "100vw",height:"100vh"}} /></center>
    </div>
  )
}

export default Hero