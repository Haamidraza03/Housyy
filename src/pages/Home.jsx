import React from 'react';
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="row justify-content-center" style={{marginTop:"80px"}}>
        <div className="col-md-5" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <img src="aboutback1.png" alt="" className='img-fluid rounded-5' />
        </div>
        <div className="col-md-4" style={{marginTop:"100px"}} data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
          <h1 className='text-white' style={{fontSize:"80px"}}> <b>Housyy</b> </h1>
          <p style={{color:"#2AEBF8"}} className='fs-1'>One way platform  for connecting the house services.</p>
        </div>
      </div>
       <h1 className="fs1 text-center text-white mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">What We Offer</h1>
       <div className="row justify-content-evenly px-5">
        <div className="col-md-3 border rounded-2 text-white p-2 mb-4 justify-content-evenly" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
        <div className="col-md-3 border rounded-2 text-white p-2 mb-4 justify-content-evenly" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
        <div className="col-md-3 border rounded-2 text-white p-2 mb-4 justify-content-evenly" data-aos="flip-left" data-aos-duration="2500" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
       </div>
    </div>
  )
}

export default Home