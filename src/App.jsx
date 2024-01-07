import {useEffect,useState} from 'react'
import './App.css'
import Navbar from './components/navbar'
import whatsapp from '/images/whatsapp.svg'
import Page2 from './components/page2'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Page1 from './components/page1'
import Page3 from './components/page3'
import Page4 from './components/page4'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {

  }, []);

  return (
    <>
   <a  href="https://wa.me/918305523140">
   <div className="whatsapp">
      <img src={whatsapp} alt="" />
      <h3>Chat with us</h3>
    </div>
   </a>
      <div className="main">
        <Navbar/>
       {/* <Page2 /> */}
       <Page1/>
       <Page3/>
       <Page4/>
      </div>
    </>
  )
}

export default App
