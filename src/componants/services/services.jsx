import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
    return ( 
        <>
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services-container">
                <article className='services'>
                    <div className="services-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                 {/* END UI/UX DESIGN */}
                 <article className='services'>
                    <div className="services-head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* END WEB DEVELOPMENT */}
                <article className='services'>
                    <div className="services-head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
                {/* END CONTENT CREATION */}
            </div>
        </section>
        </>
     );
}
 
export default Services;