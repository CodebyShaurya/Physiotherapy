import React, { useState } from 'react';
import '../css/popup.css'
function Popu  () {
    // const [showWindow, setShowWindow] = useState(false);

    function Popup() {
        return (
          <div className="popup">
            <div className="popup-inner">
                <div className='grid_contain'>
              
              <div class="heading">Book an Appointment</div>
              <button onClick={closePopup} className='close'>✖</button>
              </div>
            
            <div class="services">
                <p>Discover our wide range of exceptional services tailored to meet your needs. With our user-friendly platform, booking an appointment is quick and hassle-free, ensuring you receive the care you deserve when you need it most.</p>
            </div>
            <button class="button">Book Now</button> 
            </div>
          </div>
        );
      }
    const [showPopup, setShowPopup] = useState(true);

    const openPopup = () => {
        setShowPopup(true);
        console.log("hi")
      };
    
      const closePopup = () => {
        setShowPopup(!showPopup);
        console.log(showPopup)
      };


    return (<>

      {showPopup ?<Popup closePopup={closePopup} /> :<></>}
      </>
    );
  }




  export default Popu;