import React from 'react'
import Navbar from "../components/Navbar"

function About() {
  return (
    <div>
      <Navbar/>
      <div style={{marginTop:"80px"}} className='text-white px-5'>
         <p style={{textAlign:"justify"}} className='fs-4'><span className='fs-3'><b>About Housyy:</b></span> Housyy is a House Service Providing Web Application providing two way communication between service provider and service receiver can eliminate the exhausting efforts of searching the suitable service provider and also ensure the intended job for the service provider. A feedback based rating system can improve the skills of any service provider and service receiver can eventually get better service. It provides real time tracking of technician based on geo-location to provide faster service.</p>
      </div>
      <div className="text-center text-white fs-1">Our Aim</div>
      <div className="row px-5 fs-3 text-white" id='para1'>
      The aim of house services web application is to benefit home owners and service providers alike by making it easier to find and book home services providing a way for service providers to find work and helping customers get high quality home services at a fair price.
      </div>
      <div className="text-center text-white fs-1">Our Team</div>
      <div className="row justify-content-center p-3 text-white mt-2">
        <div className="col-md-3">
          <img src="" alt="mam" />
          <h4>Lorem, ipsum dolor.</h4>
          <p id='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus velit accusamus soluta eum, quis labore iste debitis tempora fugit officiis incidunt in repudiandae laudantium at sunt delectus sequi alias quod.</p>
        </div>
      </div>
      <div className="row justify-content-evenly text-white mt-2 p-3">
        <div className="col-md-3">
          <img src="" alt="std1" />
          <h4>Lorem, ipsum.</h4>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
        <div className="col-md-3">
          <img src="" alt="std2" />
          <h4>Lorem, ipsum.</h4>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
      </div>
      <div className="row justify-content-evenly text-white mt-4 p-3">
        <div className="col-md-3">
          <img src="" alt="std3" />
          <h4>Lorem, ipsum.</h4>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
        <div className="col-md-3">
          <img src="" alt="std4" />
          <h4>Lorem, ipsum.</h4>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
      </div>

    </div>
    
  )
}

export default About