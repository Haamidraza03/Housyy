import React from 'react'

function spsignup() {
  return (
    <div className="row justify-content-center p-3" style={{marginTop:"100px"}}>
        <div className="col-md-3 bg-white rounded-4 pt-3">
            <h1 className='text-center mb-3'>Sign <span style={{color:'rgb(255, 183, 0)'}}>Up</span></h1>
            <center><input type="text" className='rounded-pill mb-3 fs-4' placeholder='  Enter your Name' /><br /></center> 
            <center><input type="email" className='rounded-pill mb-3 fs-4' placeholder='  Enter your Email' /><br /></center> 
            <center><input type="text" className='rounded-pill mb-3 fs-4' placeholder='  Enter your Profession' /><br /></center> 
            <center><input type="number" className='rounded-pill mb-3 fs-4' placeholder='  Phone Number' /><br /></center> 
            <center><input type="password" className='rounded-pill mb-3 fs-4' placeholder='  Enter Password' /><br /></center> 
            <center><input type="password" className='rounded-pill mb-4 fs-4' placeholder='  Confirm Password' /><br /></center> 
            <center><button className='btn bg-success rounded-pill fs-5 px-5 mb-3 text-white'>Submit</button></center>
        </div>
        
    </div>
  )
}

export default spsignup