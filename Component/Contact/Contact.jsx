import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import walmart from '../../image/walmart.png'
import adobe from '../../image/adobe.png'
import microsoft from '../../image/microsoft.png'
import facebook from '../../image/facebook.png'
import facebook2 from '../../image/facebook2.png'
import twitter from '../../image/twitter.png'
import youtube from '../../image/youtube.png'
import instagram from '../../image/instagram.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3b4n9a9','template_ku8wa1h', form.current, 'FZnk8312WoNHBgmFM')
            .then((result) => {
                console.log(result.text);
                e.target.reset('home');
                alert('your email has been sent')

                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                });

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactpage">
            <div id="clients">
                <h1 className="contactpagetitle">My Client</h1>
                <p className="clientdesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nostrum similique voluptate libero ad soluta autem quidem nobis incidunt dolor, laborum illum vero tenetur necessitatibus, alias nesciunt, accusantium dolore consectetur!

                </p>
                <div className="clientimgs">
                    <img src={walmart} alt="walmart" className="clientimg" />
                    <img src={adobe} alt="adobe" className="clientimg" />
                    <img src={microsoft} alt="microsoft" className="clientimg" />
                    <img src={facebook} alt="facebook" className="clientimg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactdesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, assumenda aspernatur ad ab unde a possimus suscipit velit quae rem.</span>
                <form className='contactform' ref={form}  onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='your name'  name='from_name'/>
                    <input type="email" className='email' placeholder='your email' name='from_email' />
                    <textarea name="message" rows="5" placeholder='your message' className='msg'></textarea>

                    <button type='submit' value='send' className="submitbtn">submit</button>
                    <div className="links">
                        <img src={facebook2} alt="facebook2" className="link" />
                        <img src={twitter} alt="twitter" className="link" />
                        <img src={youtube} alt="youtube" className="link" />
                        <img src={instagram} alt="" className="link" />
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact
