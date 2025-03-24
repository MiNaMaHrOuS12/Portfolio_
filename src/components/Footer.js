import React from 'react'
import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='info-side'>
            <div className='location'>
                <FaHome size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>Bangladesh.</p>
                </div>
            </div>
            <div className='phoneNumber'>
                <h4><FaPhone size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
                    1-2323-343-83</h4>
            </div>
            <div className='gmail'>
                <h4><FaMailBulk size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
                info@gmail.com</h4>    
            </div>
        </div>
        <div className='About-company-side'>
            <h4>About the company</h4>
            <p>My name is Mina Mahrous. I'm a React Developer, seeking knowledge and hands-on experience.</p>
            <div className='social'>
                <FaFacebook size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
                <FaTwitter size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
                <FaLinkedin size={20}  style={{color:'#fff', marginRight:'2rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
