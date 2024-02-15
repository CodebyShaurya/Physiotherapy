import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg.png'

const Nav= () =>{
    const [isMobile, setIsMobile] = useState(false);
  const [isbox, setbox] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsMobile(!isMobile);
    setbox(!isbox);
  };
    const location = useLocation();
    if (location.pathname === "/") {
        return (<nav>
          
            {isMobile ? 
              <div className='navbarmob'>
              <div>
              <a href="/" ><img alt='home' src={logo} className='logo'/></a>
              </div>
              <div className="burger-icon" onClick={handleToggle}>
                      &#9776; 
              </div>
              </div>
            :  <div>
              { isbox ?(
              
                  <div className='navbox'>

                  <div>
                      {/* <a href='/' className='navdeskcontent' >Home</a><br/> */}
                      <a href='gallery' className='navdeskcontent'>Testimonials</a><br/>
                      <a href='appointment' className='navdeskcontent' >Our Services</a><br/>
                      <a href='Doctors' className='navdeskcontent'>Our Doctors</a><br/>
                      <a href='about' className='navdeskcontent'>About Me</a></div>
                          <div onClick={handleToggle}>✖</div>

                        </div>):(<div className='navbarlo'>
                        <a href="/" ><img alt='home' src={logo} className='logo'/></a>
                  <div className='navdesk'>
                      
                      <a href='Gallery' className='navdeskcontent'>Testimonials</a>
                      <a href='appointment' className='navdeskcontent' >Our Services</a>
                      
                      <a href='Doctors' className='navdeskcontent'>Our Doctors</a>
                      <a href='about' className='navdeskcontent'>About Me</a>
                  </div></div>
                  )
              } </div>
              }
              
          </nav>)
      }{
      return ( <nav>
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
          
      </nav> )
    }
    
}


export default Nav;