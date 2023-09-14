import React from 'react';
import {useTypewriter,Cursor} from "react-simple-typewriter";

function Glogsin() {
  const [text] = useTypewriter({
    words : ["Services"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
  });

  return (
    <div className='mt-5'>
      <div className="row justify-content-center px-3">
          <div className="col-md-3 bg-white rounded-4 text-center py-5 pb-5" style={{marginTop: 170}} data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <h1 className="text-dark" style={{fontSize: 40}}>House <span style={{fontWeight:"bold",color:"rgb(255, 183, 0)"}}>{text}</span><span><Cursor/></span></h1>
            <div className="btn btn1 fs-5 rounded-pill border border-dark px-2 mt-3 w-75" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><i class="bi bi-person-workspace"></i> Service Provider</div> <br />
            <div className="btn btn1 fs-5 rounded-pill border border-dark px-5 mt-3 w-75" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><i class="bi bi-person-circle"></i> User</div>
          </div>
        </div>
    </div>

  )
}

export default Glogsin