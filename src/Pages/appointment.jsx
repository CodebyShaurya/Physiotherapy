import '../css/appointment.css';
import Nav from '../Components/navbar'
import React, { useState, useEffect } from 'react';
// import image from '../assets/Frame 20.png'


const Appointment = () => {
    
    return (

        <div className='gallerypage' >
            <Nav/>
        <div>
            <div className='gallerytxtheading'>Services Offered</div>
            <div className='servicesoff'>
            
                <li>Neurological Physiotherapy</li>
                <li>Sport Physiotherapy</li>
                <li>Orthopaedic Physiotherapy</li>
                <li>Paediatric Physiotherapy</li>
                <li>Geriatric Physiotherapy</li>
                <li>Nursing Care</li>
                <li>Care Taker</li>
                <li>Orthopedic Equipment</li>
                <li>Vestibular Rehabilitation</li>
                <li>Musculoskeletal Physiotherapy</li>
                <li>Cardiovascular Physiotherapy</li>


            </div>
        </div>
        {/* <div className='gallerytxtheading'>Book a Service</div>
        <div className='bookaservice'>
            
            {/* <div className='book'>
                <h1>Book a Free 20-minute Introductory Call</h1>
                <p>This call is an opportunity to ask any questions, and for me to find out more about you and the kind of help you are looking for. Together we can discuss the prospect of working together, and how this might look</p>
                <div className='booknow'> Book Now</div>
            </div> 



            <div className='book'>
                <h1>Book a Physiotherapy Session  from our doctors</h1>
                <p>This call is an opportunity to ask any questions, and for me to find out more about you and the kind of help you are looking for. Together we can discuss the prospect of working together, and how this might look.</p>
                <div className='booknow'> Book Now</div>
            </div>

            
        </div> */}
        
        </div>
        

        )
    
    }
    
    export default Appointment;