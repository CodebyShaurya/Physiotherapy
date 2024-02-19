import '../css/aboutme.css';
import Nav from '../Components/navbar'
import React, { useState, useEffect } from 'react';
import image from '../assets/im.png'


const Gallery = () => {
    
    return (

        <div className='gallerypage' >
            <Nav/>
            


            <div className='testimonals'>
            <div className='gallerytxtheading'>About Me</div>
            <div className='aboutme'>
                <div className='grid-container'>
                <div >
                    <p className="physiotherapy-component">Dr Jai Sagar is one of the best male physical therapy experts in Gokulpur, 
                    Yamuna Vihar, Delhi. He offers physiotherapy at home in Gokulpur, Yamuna Vihar and nearby areas Durgapur, Sonia Vihar, 
                    Shahdara, Ashok Vihar, Nand Nagari, Bhajanpura, Karawal Nagar, Wazirabad, Mukharji Nagar, GTB Nagar, Burari, Mukund Pur.
                    <br/><br/>

                    With a well-established practice for home physiotherapy, he is an expert in treatment of conditions such as back pain,
                    neck pain, knee pain, sciatica, cervical spondylosis, cervicocephalic syndrome, cervicobrachial syndrome, disc bulge,
                    frozen shoulder, arthritis, osteoporosis, muscle weakness, balancing problems… Post surgery rehab for shoulder,
                    knee surgery / TKR, hip replacement, ligament reconstruction.
                    Neurological issues like stroke, nerve injuries, Bell's palsy, multiple sclerosis, Parkinson's.
                    

                    <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 7 Years</div>
                    <div className="insideof"><span className='detailsofdoctor'>Qualification :</span> BPT</div>
                    <div className="insideof"><span className='detailsofdoctor'>Working Hour :</span> 9 am to 5 pm</div>


                    </p>


                    {/* <!-- Add your physiotherapy content here --> */}
{/*                     
                    <div className="contact-component">
                    <div className='gallerytxtheading'>Get in Touch</div>
                    <div className='logos'>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" className="logoinabout"/></a>
                    <a href="mailto:jaiphysio103@gmail.com"><img src="https://www.svgrepo.com/show/14478/email.svg" className="logoinabout"/></a>
                    <a href="tel:+917355177359"><img src="https://www.svgrepo.com/show/5236/phone-call.svg" className="logoinabout"/></a>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" className="logoinabout"/></a>
                    </div>
                    </div>*/}
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