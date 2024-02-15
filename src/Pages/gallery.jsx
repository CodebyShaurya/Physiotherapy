import '../css/gallery.css';
import { useState, useRef,useEffect } from "react";
import Nav from '../Components/navbar';
import img1 from '../assets/IMG-20240210-WA0001.jpg';
import img2 from '../assets/IMG-20240210-WA0002.jpg';
import img3 from '../assets/IMG-20240210-WA0003.jpg';
import img4 from '../assets/IMG-20240210-WA0006.jpg';
import vid1 from '../assets/VID-20240210-WA0001.mp4';
import vid2 from '../assets/VID-20240210-WA0002.mp4';
import logo from '../assets/logo-removebg.png'

// import React, { useState, useEffect } from 'react';


const Gallery = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isbox, setbox] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 750);
        console.log(isMobile)
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };


    const handleToggle = () => {
        setIsMobile(!isMobile);
        setbox(!isbox);
      };
    
    return (

        <div className='gallerypage' >
             <nav>
        {isMobile ? <div className='navbarmob'>
          <div>
          <a href="/" ><img alt='home' src={logo} className='logo'/></a>
          </div>
          <div className="burger-icon1" onClick={handleToggle}>
                  &#9776; 
          </div>
          </div>
        :  <div>
          { isbox ?(<div className='navbox1'>

              <div>
                  <a href='gallery' className='navdeskcontent1'>Testimonials</a><br/>
                  <a href='appointment' className='navdeskcontent1' >Our Services</a><br/>
                  <a href='Doctors' className='navdeskcontent1'>Our Doctors</a><br/>
                  <a href='about' className='navdeskcontent1'>About Me</a></div>
                      <div onClick={handleToggle}>✖</div>

                    </div>):(<div className='navbarlo'>
                        <a href="/" ><img alt='home' src={logo} className='logo'/></a>
                  
              <div className='navdesk1'>
                  
                  <a href='gallery' className='navdeskcontent1'>Testimonials</a>
                  <a href='appointment' className='navdeskcontent1' >Our Services</a>
                  {/* <a href='/' className='navdeskcontent1' >Home</a> */}
                  <a href='Doctors' className='navdeskcontent1'>Our Doctors</a>
                  <a href='about' className='navdeskcontent1'>About Me</a>
              </div></div>
              )
          } </div>
          }
          
      </nav>
            <div className='testimonals'>
            <div className='gallerytxtheading'>Testimonials</div>
            <div className='testimonial_container'>
            
            <div className='testimonial'>
                <video className="video1" controls={true} autoPlay={false} ref={videoRef} onClick={togglePlay} loop>
                    <source src={vid1} type="video/mp4" />
                </video>

                </div>

            <div className='testimonial'>

                <video className="video1" controls={true} autoPlay={false} ref={videoRef} onClick={togglePlay} loop>
                    <source src={vid2} type="video/mp4" />
                </video> 

                </div>

                
                {/* <div className='testimonial'></div>
                <div className='testimonial'></div>
                <div className='testimonial'></div>
                <div className='testimonial'></div> */}
            </div>
            </div>


            <div className='testimonals'>
            <div className='gallerytxtheading'>Gallery</div>
            <div className='testimonial_container'>
                <img src={img1} alt="Our photos" className='photoingallery'/>
                <img src={img4} alt="Our photos" className='photoingallery'/>
                <img src={img3} alt="Our photos" className='photoingallery'/>
                {/* <img src={img2} alt="Our photos" className='photoingallery'/> */}
            </div>
            </div>
        </div>

    )

}

export default Gallery;