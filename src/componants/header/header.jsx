import React from 'react'
import './header.css'
import Cta from './cta';
import ME from '../../assets/me.jpeg'
import HeaderSocials from './headersocials';
import Fade from 'react-reveal/Fade';
const Header = () => {
    return ( 
        <>
           
        <header>
           <div className="container header-container">
                <h5>Hello I'm</h5>
                <h2>Abdel Hamid Moussa</h2>
                <h5 className='text-light'>Frontend Developer</h5>
                <Cta/>
                  <HeaderSocials/>
                <div className='me'>
                  <Fade left>
                    <img src={ME} alt="ME" />
                    </Fade>
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
           </div>
        </header>
      
        </>
     );
}
 
export default Header;