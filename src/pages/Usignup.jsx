import React from 'react'
import {Link} from 'react-router-dom';

function Usignup() {
  return (
    <div className="row justify-content-center px-5" style={{marginTop:"100px"}}>
        <div className="col-md-3 bg-white rounded-4 pt-3 mb-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <h1 className='text-center mb-4'>Sign <span style={{color:'rgb(255, 183, 0)'}}>Up</span></h1>
            <center><input type="text" id='uname' className='rounded-4 mb-4 fs-4 border ps-3' placeholder='Enter your User Name' /><br /></center> 
            <center><input type="email" id='email' className='rounded-4 mb-4 fs-4 border ps-3' placeholder='Enter your Email' /><br /></center> 
            
            <center><input type="password" id='password' className='rounded-4 mb-4 fs-4 border ps-3' placeholder='Enter Password' /><br /></center> 
            
            <center><button className='btn bg-success rounded-pill fs-5 px-5 mb-3 text-white'>Submit</button></center>
            <center><div className="fs-5 mb-2">Already have an Account?<Link to="/ulogin" style={{textDecoration:"none"}} className='link text-warning'>Login</Link></div></center>
        </div>
        
    </div>
  )
}

export default Usignup