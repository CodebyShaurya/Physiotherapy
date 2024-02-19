import React, { useState } from 'react';
import '../css/popup.css'
function Popu  () {
    // const [showWindow, setShowWindow] = useState(false);

    function Popup() {
        return (
          <div className="popup">
            <div className="popup-inner">
                <div className='grid_contain'>
              
              <div class="heading blinking">Book an Appointment</div>
              <button onClick={closePopup} className='close'>✖</button>
              </div>
            
            <div class="services">
                <p>Discover our wide range of exceptional services tailored to meet your needs. With our user-friendly platform, booking an appointment is quick and hassle-free, ensuring you receive the care you deserve when you need it most.</p>
            </div>
            <a href='https://us21.list-manage.com/survey?u=9376ae322b2a12153928869c3&id=edd53ec431&attribution=false'><button className="bookbutton" >Book Now</button> </a>
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
