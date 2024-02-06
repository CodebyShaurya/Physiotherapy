import '../css/aboutme.css';
import Nav from '../Components/navbar'
import React, { useState, useEffect } from 'react';
import image from '../assets/Frame 20.png'


const Gallery = () => {
    
    return (

        <div className='gallerypage' >
            <Nav/>
            


            <div className='testimonals'>
            <div className='gallerytxtheading'>About Me</div>
            <div className='aboutme'>
                <div className='grid-container'>
                <div >
                    <p className="physiotherapy-component">Lorem ipsum dolor sit amet consectetur. Est vitae eu et vulputate vitae arcu nulla. Aliquet enim et sed ut euismod varius faucibus amet etiam. Fermentum sed at mattis sed vulputate felis. Volutpat iaculis integer eget elementum fames fringilla urna convallis. Feugiat ornare sed vestibulum pellentesque fusce tristique ut. Tempus vitae sodales placerat tellus leo diam nisl amet. At morbi mi a feugiat porta at egestas ut. Ipsum auctor metus nunc aliquet sed ac at mauris ornare. Leo eu in vel nam elit id gravida. Semper id tortor pellentesque ipsum amet eros orci. Ante lectus felis mattis gravida commodo est. Vitae amet orci adipiscing ligula iaculis in.</p>
                    {/* <!-- Add your physiotherapy content here --> */}
                    
                    <div className="contact-component">
                    <div className='gallerytxtheading'>Get in Touch</div>
                    <div className='logos'>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" className="logoinabout"/></a>
                    <a href=""><img src="https://www.svgrepo.com/show/14478/email.svg" className="logoinabout"/></a>
                    <a href=""><img src="https://www.svgrepo.com/show/5236/phone-call.svg" className="logoinabout"/></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" className="logoinabout"/></a>
                    </div>
                    {/* <!-- Add your social media icons and contact info here --> */}
                    </div>
                    </div>
                    
                    <img src={image} alt="Image" className='image-component'/>
                    {/* <!-- Add your image content here --> */}
                    
                </div>
                </div>
            </div>
            </div>
        

    )

}

export default Gallery;