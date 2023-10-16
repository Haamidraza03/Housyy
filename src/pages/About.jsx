import React from 'react'
import Navbar from "../components/Navbar"
import img1 from "./deepika-mam.jpg"
import img2 from "./hrk.jpg"

function About() {
  return (
    <div>
      <Navbar/>
      <div style={{marginTop:"80px"}} className='text-white px-5'>
         <p style={{textAlign:"justify"}} className='fs-4' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out"><span className='fs-3'><b>About Housyy:</b></span> Housyy is a House Service Providing Web Application providing two way communication between service provider and service receiver can eliminate the exhausting efforts of searching the suitable service provider and also ensure the intended job for the service provider. A feedback based rating system can improve the skills of any service provider and service receiver can eventually get better service. It provides real time tracking of technician based on geo-location to provide faster service.</p>
      </div>
      <div className="text-center text-white fs-1" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Our Aim</div>
      <div className="row px-5 fs-3 text-white" id='para1' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
      The aim of house services web application is to benefit home owners and service providers alike by making it easier to find and book home services providing a way for service providers to find work and helping customers get high quality home services at a fair price.
      </div>
      <div className="text-center text-white fs-1 mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Our Team</div>
      <div className="row justify-content-center p-3 text-white mt-2">
        <div className="col-md-3 mt-3" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <center><img src={img1} alt="mam" className='img-fluid rounded-circle' /></center> 
          <center><h4 className='mt-2'>Ms. Deepika Nadar</h4></center>
          <p id='para1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus velit accusamus soluta eum, quis labore iste debitis tempora fugit officiis incidunt in repudiandae laudantium at sunt delectus sequi alias quod.</p>
        </div>
      </div>
      <div className="row justify-content-evenly text-white mt-2 p-3">
        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <center><img src={img2} alt="std1" className='img-fluid rounded-circle' /></center>
          <center><h4 className='mt-2'>Haamid Raza Kazi</h4></center>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <center><img src="" alt="std2" className='img-fluid rounded-circle' /></center>
          <center><h4 className='mt-2'>Sakshi Choudhary</h4></center>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
      </div>
      <div className="row justify-content-evenly text-white mt-4 p-3">
        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
          <center><img src="" alt="std3" className='img-fluid rounded-circle' /></center>
          <center><h4 className='mt-2'>Disha Bhandare</h4></center>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out">
          <center><img src="" alt="std4" className='img-fluid rounded-circle' /></center>
          <center><h4 className='mt-2'>Anjali Gupta</h4></center>
          <p id='para1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo incidunt magni voluptate debitis totam minima accusantium eos saepe dolores dignissimos.</p>
        </div>
      </div>

    </div>
    
  )
}

export default About