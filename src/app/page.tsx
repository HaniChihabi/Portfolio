"use client"

import React, { useRef } from 'react'; 
import './globals.css';
import 'animate.css';
export default function Home() {

  return (
  <div className="div">
    <div className="menuBar">
    <a href="#section1" className="menuIcon1 icon">Home</a>
    <a href="#section2" className="menuIcon2 icon">About</a>
    <a href="#section3" className="menuIcon3 icon">Services</a>
    <a href="#section4" className="menuIcon4 icon">Projects</a>
    <a href="#section5" className="menuIcon5 icon">Information</a>
    {/* <a href="#section1" className="menuIcon1 icon"><span className="material-symbols-outlined">person</span></a>
    <a href="#section2" className="menuIcon2 icon"><span className="material-symbols-outlined">info</span></a>
    <a href="#section3" className="menuIcon3 icon"><span className="material-symbols-outlined">linked_services</span></a>
    <a href="#section4" className="menuIcon4 icon"><span className="material-symbols-outlined">settings</span></a>
    <a href="#section5" className="menuIcon5 icon"><span className="material-symbols-outlined">contact_support</span></a> */}
    </div>
        <div className="container">
            <a data-scroll href="#full"><div className="arrow"></div></a>
        </div>
        <section id='section1' className="section1">
            <div className="screen" style={{ backgroundColor: 'rgb(251, 244, 231)' }}>  
                <div className="sec1-block" >
                    <div className="block1">
                        <div>
                            <h1>Hani Chihabi</h1>
                            <h1></h1>                          
                        </div>
                        </div>
                        <div className="block2">
                            <h1>Software Engineering</h1>
                            <h1></h1>
                        </div>
                </div>  
            </div>   
    </section>

    <section id='section2'  className="section2">
        <div className="screen" style={{backgroundColor: "white"}}>
            <div className="slides"> 
                <div id="slide-1">
                    <div className="sec2-block">
                        <div className="sec2-block1">
                                <h2>About</h2>  
                        </div>
                        <div className="sec2-block2">
                            <span>&#8605;</span>   
                        </div> 
                    </div>                
                </div>
                <div id="slide-2">                    
                    <div className="sec2-text">
                        <h1>Hani Chihabi.</h1>
                        <h1>Junior Software engineer.</h1>                       
                        <h1>Germany.</h1>
                        <h1>Hungry. Humble. Passionate.</h1>                        
                    </div>                
                </div> 
                <div id="slide-3">
                    <div className="hover-trigger">
                        <h1>Goals</h1>
                        <div className="bullet-points">
                            <ul>
                                <li>
                                    <span className="default-text">Learning new technologies</span>
                                    <span className="hover-text">Blockchain and Distributed Ledger Technology.</span>
                                </li>
                                <li>
                                    <span className="default-text">Increase professional network</span>
                                    <span className="hover-text">Knowledge and Skill Sharing, Collaboration and Innovation, Mentorship and Guidance</span>
                                </li>
                                <li>
                                    <span className="default-text">Work on cool projects</span>
                                    <span className="hover-text">Innovative Creations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="slide-4">
                    <div className="hover-trigger">
                        <h1>Skills</h1>
                            <div className="bullet-points">
                                <ul>
                                    <li>
                                        <span className="default-text">Problem solving</span>
                                        <span className="hover-text">Achieving a goal by overcoming obstacles.</span>
                                    </li>
                                    <li>
                                        <span className="default-text">Communication</span>
                                        <span className="hover-text">One of the most crucial communication skills is active listening.</span>
                                    </li>
                                    <li>
                                        <span className="default-text">Critical thinking</span>
                                        <span className="hover-text">Coming up with the best possible solution to the decision.</span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div id="slide-5">
                <div className="hover-trigger">
                    <h1>Personal Values in Engineering</h1>
                        <div className="bullet-points">
                            <ul>
                                <li>
                                    <span className="default-text">Respect and Inclusion</span>
                                    <span className="hover-text">Valuing diversity and fostering an inclusive work environment</span>
                                </li>
                                <li>
                                    <span className="default-text">Quality and Excellence</span>
                                    <span className="hover-text">Prioritizing high standards in coding, design, and testing</span>
                                </li>
                                <li>
                                    <span className="default-text">Continuous Learning and Development</span>
                                    <span className="hover-text">Staying current with emerging technologies and methodologies.</span>
                                </li>
                                <li>
                                    <span className="default-text">Creativity</span>
                                    <span className="hover-text">Innovative Creations</span>
                                </li>
                            </ul>
                        </div>
                </div>
                </div>
                <div id="slide-6">
                    <div className="hover-trigger">
                        <h1>Services Projects & More</h1>
                            <div className="overlay">
                                <p>New text for Skills</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id='section3' className="section3">     
            <div className="sec3-block">
                <div className="service1">
                    <h1>Custom Website Development</h1>
                    <p>
                    "Create a unique online identity with our Custom Website Development service. Tailored to your brand's needs, we build visually appealing, user-friendly websites with robust functionality, ensuring a standout digital presence."                    </p>
                    <h2>Know more</h2>
                </div>
                <div className="service2">
                    <h1>Custom Software Development</h1>
                    <p>
                    "Transform your business processes with our Custom Software Development. Our team designs and implements bespoke software solutions that streamline operations, increase efficiency, and are tailored to your specific organizational needs."                    </p>
                    <h2>Know more</h2>
                </div>
                <div className="service3">
                    <h1>Mobile Application Development</h1>
                    <p>
                    "Engage your audience on the go with our Mobile Application Development service. We craft intuitive, high-performing mobile apps for both iOS and Android platforms, perfect for businesses looking to enhance their mobile presence."                    </p>
                    <h2>Know more</h2>
                </div>
        </div>        
    </section>



    <section id='section4' className="section4">
    
    <div className="sliderr">
      <input type="radio" name="slide_switch" id="id1" />
      <label htmlFor="id1">
        <img src="/Pacman.jpg" width="200" alt="Slide 1" />
      </label>
      <img src="/Pacman.jpg" alt="Slide 1" />
      
      <input type="radio" name="slide_switch" id="id2" defaultChecked />
      <label htmlFor="id2">
        <img src="/Pacman.jpg" width="200" alt="Slide 2" />
      </label>
      <img src="/Pacman.jpg" alt="Slide 2" />
      
      <input type="radio" name="slide_switch" id="id3" />
      <label htmlFor="id3">
        <img src="/Pacman.jpg" width="200" alt="Slide 3" />
      </label>
      <img src="/Pacman.jpg" alt="Slide 3" />
      
      <input type="radio" name="slide_switch" id="id4" />
      <label htmlFor="id4">
        <img src="/Pacman.jpg" width="200" alt="Slide 4" />
      </label>
      <img src="/Pacman.jpg" alt="Slide 4" />
      
      <input type="radio" name="slide_switch" id="id5" />
      <label htmlFor="id5">
        <img src="/Pacman.jpg" width="200" alt="Slide 5" />
      </label>
      <img src="/Pacman.jpg" alt="Slide 5" />
    </div>


    </section>



    <section id='section5' className="section5">
  <div className="screen" style={{ backgroundColor: "transparent" }}>
    <div className="sec5-block">
      <div className="link link1">
        <h1>GitHub</h1>
        <div className="overlay">
          <a href="https://github.com/HaniChihabi">@HaniChihabi</a>
          
        </div>
      </div>
      <div className="link link2">
        <h1>Instagram</h1>
        <div className="overlay">
          <a href="https://www.instagram.com/hani_chihabi/">@hani_chihabi</a>
        </div>
      </div>
      <div className="link link3">
        <h1>Gmail</h1>
        <div className="overlay">
        <a href = "mailto: hanichihabih@gmail.com">hanichihabih@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</section>


    
</div>
  )}
