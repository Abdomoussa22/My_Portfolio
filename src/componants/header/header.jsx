import React from 'react'
import './header.css'
import Cta from './cta';
import ME from '../../assets/me.jpeg'
import HeaderSocials from './headersocials';
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
                    <img src={ME} alt="ME" />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
           </div>
        </header>
        </>
     );
}
 
export default Header;