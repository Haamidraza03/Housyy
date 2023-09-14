import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div>
      <Navbar/>
       <Hero/>
       <h1 className="fs1 text-center text-white mt-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">What We Offer</h1>
       <div className="row justify-content-evenly">
        <div className="col-md-3 border rounded-2 text-white p-2 justify-content-evenly" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
        <div className="col-md-3 border rounded-2 text-white p-2 justify-content-evenly" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
        <div className="col-md-3 border rounded-2 text-white p-2 justify-content-evenly" data-aos="flip-left" data-aos-duration="2500" data-aos-easing="ease-in-out">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem ullam, cumque eveniet maiores nulla deserunt officia, veniam deleniti perspiciatis quibusdam facilis magnam ipsum consequatur! Ex quasi atque et nam?
        </div>
       </div>
    </div>
  )
}

export default Home