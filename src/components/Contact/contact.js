import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_zins7jm', 'template_8ki1tyw', form.current, 'BxXKTf8kRFRKqP00b')
        .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        }, (error) => {
            console.log(error.text);
        });
  };

  return (
    
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me </h1>
            <span className='contactDesc'> Please fill out the form below to discuss any work opportunites</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='to_name' /> 
                <input type='email' className='email' placeholder='Your Email' name='from_name'></input>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='FacebookIcon' className='link' />
                    <img src={TwitterIcon} alt='TwitterIcon' className='link' />
                    <img src={YoutubeIcon} alt='YoutubeIcon' className='link' />
                    <img src={InstagramIcon} alt='InstagramIcon' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact