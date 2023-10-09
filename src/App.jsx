import './App.css';
import React, {useEffect} from 'react';
import Home from '../src/pages/Home';
import Footer from '../src/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../src/pages/About';
import Glogsin from '../src/pages/Glogsin';
import Spsignup from "../src/pages/Spsignup";
import Usignup from "../src/pages/Usignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';

function App() {

  useEffect(()=>{
    AOS.init({once:"true"});
  },[])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/glogsin' element={<Glogsin/>} />
          <Route path='/spsignup' element={<Spsignup/>} />
          <Route path='/usignup' element={<Usignup/>} />
          <Route path='/contact' element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
