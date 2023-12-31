import React from 'react'
import Navbarh from "../components/Navbarh"

function Sphome() {
  return (
    <>
    <Navbarh/>
    <div className="row justify-content-center" id='herotop' style={{marginTop:"80px"}}>
        <div className="col-md-5" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <img src="aboutback1.png" className='img-fluid rounded-5 p-2' />
        </div>
        <div className="col-md-4" id='herodown' style={{marginTop:"100px"}} data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
          <h1 className='text-white' style={{fontSize:"80px"}}> <b>Housyy</b> </h1>
          <p style={{color:"#2AEBF8"}} className='fs-1'>One way platform  for connecting the house services.</p>
        </div>
      </div>
      <div className="row justify-content-center text-dark">
        <div className="col-md-4 bg-white px-3 py-3 rounded-5" data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
          <p className="fs-4" id='para1'><b>Note: </b>All the Service providers have to send <b>10%</b> of their daily earnings to +919422671453. Kindly keep sending the respective amount daily or else your account will be deleted.</p>
        </div>
      </div>
    </>
  )
}

export default Sphome