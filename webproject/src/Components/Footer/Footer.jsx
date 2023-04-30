import React from 'react'
import "./footer.css"
import "./footer.scss"
import { SiYourtraveldottv } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className='logo flex'>
              <h1 className='flex'>
                <SiYourtraveldottv className='icon'/>
                Dot
              </h1>
            </a>
          </div>
           
          <div className="socials flex">

                  
                  <ImFacebook className='icon'/>
                  <BsTwitter className='icon'/>
                  <AiFillInstagram className='icon'/>
          </div>
         
        </div>
        
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            ContactUs
          </span>
          <span className="phone">+91 76575XXXXX</span>
        </div>

      </div>
    </div>
  )
}

export default Footer