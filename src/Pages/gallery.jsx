import '../css/gallery.css';
import { useState, useRef } from "react";
import Nav from '../Components/navbar';
import img1 from '../assets/IMG-20240210-WA0001.jpg';
import img2 from '../assets/IMG-20240210-WA0002.jpg';
import img3 from '../assets/IMG-20240210-WA0003.jpg';
import img4 from '../assets/IMG-20240210-WA0006.jpg';
import vid1 from '../assets/VID-20240210-WA0001.mp4';
import vid2 from '../assets/VID-20240210-WA0002.mp4';

// import React, { useState, useEffect } from 'react';


const Gallery = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

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
    
    return (

        <div className='gallerypage' >
            <Nav/>
            <div className='testimonals'>
            <div className='gallerytxtheading'>Testimonials</div>
            <div className='testimonial_container'>
            
            <div className='testimonial'>
                <video className="video1" controls={true} autoPlay={true} ref={videoRef} onClick={togglePlay} loop>
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