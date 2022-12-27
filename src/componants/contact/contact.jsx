import React from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vge9099', 'template_u7ubwhh', form.current, 'HlmuYRsjZPKIOaY5i')

          e.target.reset()
      };
    return (
     <>
     <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact-container">
            <div className="contact-options">
                <article className='contact-option'>
                    <MdOutlineMail className='contact-option-icon'/>
                    <h4>Email</h4>
                    <h5>abdomousa356@gmail.com</h5>
                    <a href="mailto:abdomousa356@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact-option'>
                    <RiMessengerLine className='contact-option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Abdelhamid Moussa</h5>
                    <a href="https://m.me/abdo.mousa.39" target="_blank">Send a message</a>
                </article>
                <article className='contact-option'>
                    <BsWhatsapp className='contact-option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>+201066852263</h5>
                    <a href="https://api.whatsapp.com/send?phone+=01066852263" target="_blank">Send a message</a>
                </article>
            </div>
            {/* END CONTACT OPTION */}
            <form ref={form} onSubmit = {sendEmail} >
                <input type="text" name='name' placeholder='Your Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
       
     </section>
     </> 
    );
}
export default Contact;