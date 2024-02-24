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
                <p>Dr. Jai Physio Services elevates your journey to optimal health with expertly delivered physiotherapy and healthcare. We offer convenient in-home sessions led by highly qualified and experienced doctors, ensuring a personalized and comfortable path to recovery. Explore our comprehensive services encompassing physiotherapy, chiropractic care, and more.</p>
            </div>
            <a href='https://forms.gle/fZ7Wcsy8ZyNNqF49A'><button className="bookbutton" >Book Now</button> </a>
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
