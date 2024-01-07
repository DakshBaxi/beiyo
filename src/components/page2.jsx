import {useEffect,useState} from 'react'
import '../styles/page2.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const page2 = () => { 
  useEffect(() => {
   
  
  }, []);

 
  return (
    <div className="hosteltour">
        <h1>Lets Take a Hostel Tour</h1>
        <div className="movingdiv">
            <div className="imagediv"></div>
            <div className="contentdiv"></div>
        </div>
    </div>
  )
}

export default page2
