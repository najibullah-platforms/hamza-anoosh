import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFlickr } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";

const SocialMedia = () => {
  return (
    <div className='app__social'>

      <div>
        <a href="https://www.flickr.com/photos/187334301@N03/" target="_blank" rel="noopener noreferrer">
          <FaFlickr />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/smileenglish01" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/smileenglish01?igsh=MWNudXRlbnhxcmU0cQ==" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          <TbWorldWww />
        </a>
      </div>

    </div>
  )
}

export default SocialMedia