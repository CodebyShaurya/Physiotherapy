import '../css/gallery.css';
import Nav from '../Components/navbar'
// import React, { useState, useEffect } from 'react';


const Gallery = () => {
    
    return (

        <div className='gallerypage' >
            <Nav/>
            <div className='testimonals'>
            <div className='gallerytxtheading'>Testimonials</div>
            <div className='testimonial_container'>
                <div className='testimonial'>Lorem ipsum dolor sit amet consectetur. Quis massa eget suspendisse gravida amet. Pulvinar massa in cursus metus viverra consequat arcu egestas eu. In pellentesque egestas pellentesque sed etiam.
Lorem ipsum dolor sit amet consectetur. Quis massa eget suspendisse gravida amet. Pulvinar massa in cursus metus viverra consequat arcu egestas eu. In pellentesque egestas pellentesque sed etiam.</div>

                <div className='testimonial'></div>
                <div className='testimonial'></div>
                <div className='testimonial'></div>
                <div className='testimonial'></div>
                <div className='testimonial'></div>
            </div>
            </div>


            <div className='testimonals'>
            <div className='gallerytxtheading'>Gallery</div>
            <div className='testimonial_container'>
                <img src="" alt="Our photos" className='photoingallery'/>
            </div>
            </div>
        </div>

    )

}

export default Gallery;