import '../css/doctor.css';
import Nav from '../Components/navbar';
import doctor from '../assets/Frame 42.png';
import manoj from '../assets/DrManoj.jpg'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const Doctor = () => {
    const [showWindow, setShowWindow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    function Popup() {
        return (
          <div className="popup">
            <div className="popup-inner">
              <button onClick={closePopup}>Close</button>
              <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div> 
            </div>
          </div>
        );
      }

    const openPopup = () => {
      setShowPopup(true);
      console.log("hi")
    };
  
    const closePopup = () => {
      setShowPopup(!showPopup);
      console.log(showPopup)
    };
    const handleClick = () => {
      setShowWindow(true);
    }
    return (

        <div className='gallerypage' >
            <Nav/>
            {/* <div className="content">
        <h1>Click the button to open popup</h1>
        <button onClick={openPopup}>Open Popup</button>
        {showPopup && <Popup closePopup={closePopup} />} 
      </div>*/}
            <div className='testimonals'>
            <div className='gallerytxtheading'>Our Doctors</div>
            <div className='doctor_container'>
                <div className='doctor'>
                    <img className='imageofdoctor' src={manoj} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr. Manoj</div>
                        
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    <div className="content">
                            <a href='/DrManoj'><button  className='btndetail'>Know More{'>>'}</button></a>
                            
                    </div>
                    {showPopup && <Popup closePopup={closePopup} />}
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div >
                    
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                {/* <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div>

                <div className='doctor'>
                    <img className='imageofdoctor' src={doctor} alt='dr jai'/>
                    <div>
                        <div className='NameofDoctor'>Dr.Jai Sagar</div>
                        <div className="insideof"><span className='detailsofdoctor'>Experience :</span> 8 Years</div>
                        <div className="insideof"><span className='detailsofdoctor'>Specializes In :</span> Physiotherapy</div>
                        <div className="insideof"><span className='detailsofdoctor'>Area :</span> Delhi</div>
                        <div className="insideof"><span className='detailsofdoctor'>Known For :</span> Best Physiotherapy</div>
                    </div>
                    
                </div> */}
            </div>
            </div>
        </div>

)

};

export default Doctor;