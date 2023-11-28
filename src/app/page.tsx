"use client"

import React, { useRef } from 'react'; 
import './globals.css';
import 'animate.css';
export default function Home() {

  
  return (
  <div className="div">
    <div className="menuBar">
    <a href="#section1" className="menuIcon1 icon"><span className="material-symbols-outlined">person</span></a>
    <a href="#section2" className="menuIcon2 icon"><span className="material-symbols-outlined">info</span></a>
    <a href="#section3" className="menuIcon3 icon"><span className="material-symbols-outlined">linked_services</span></a>
    <a href="#section4" className="menuIcon4 icon"><span className="material-symbols-outlined">settings</span></a>
    <a href="#section5" className="menuIcon5 icon"><span className="material-symbols-outlined">contact_support</span></a>
    </div>
        <div className="container">
            <a data-scroll href="#full"><div className="arrow"></div></a>
        </div>
        <section id='section1' className="section1">
            <div className="screen" style={{ backgroundColor: "rgba(198, 184, 253, 0.698)" }}>  
                <div className="sec1-block" >
                    <div className="block1">
                        <div>
                            <h1>Hani</h1>
                            <h1>Chihabi.</h1>                          
                        </div>
                        </div>
                        <div className="block2">
                            <h1>Software</h1>
                            <h1>Engineering.</h1>
                            {/* <h1>Hello, my name is Hani Chihabi.</h1>
                            <h1>I'm looking for new cool</h1>   
                            <h1>Job opportunities</h1>
                            <h1>as a junior software engineer,</h1> */}
                        </div>
                        
                        
                    
                </div>  
            </div>   
    </section>

    <section id='section2'  className="section2">
        <div className="screen" style={{backgroundColor: "rgba(251, 170, 186, 0.698)"}}>
            <div className="slides"> 
                <div id="slide-1">
                    <div className="sec2-block">
                        <div className="sec2-block1">
                                <h2>About.</h2>  
                        </div>
                        <div className="sec2-block2" >
                            <span>&#8605;</span>   
                        </div> 
                    </div>                
                </div>
                <div id="slide-2">                    
                    <div className="intro-texts">
                        <h3>Hey There,</h3>
                        <h1>My name is Hani and I am an upcoming software engineer!</h1>
                        <br />
                        <h2>Nice to meet you!</h2>                        
                    </div>                
                </div> 
                <div id="slide-3">
                
                </div>
                <div id="slide-4">
                
                </div>
                <div id="slide-5">
                
                </div>
            </div>
        </div>
    </section>



    <section id='section3' className="section3">     
        <div className="screen" style={{backgroundColor: "rgba(228, 243, 113, 0.698)"}}>
            <div className="sec3-block">
                <div className="service1">
                    <h1>Web Development</h1>
                    <p>
                        
                    </p>
                </div>
                <div className="service2">
                    <h1>Custom Software Development</h1>
                    <p>
                        
                    </p>
                </div>
                <div className="service3">
                    <h1>Mobile Application Development</h1>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>        
    </section>



    <section id='section4' className="section4">
        <div className="screen" style={{backgroundColor: "turquoise"}}>
            <div className="sec4-block">

            </div>
            
        </div>
    </section>



    <section id='section5'  className="section5">
        <div className="screen" style={{backgroundColor: "rgba(254, 218, 122, 0.698)"}}> 
            <div className="sec5-block">
                            <div className="github">
                                <h1>GitHub</h1>
                            </div>
                            <div className="gmail">
                                <h1>Gmail</h1>
                            </div>
                            <div className="linkedin">
                                <h1>LinkedIn</h1>
                            </div>
            </div>
        </div>       
    </section>    
    
</div>
  )}
