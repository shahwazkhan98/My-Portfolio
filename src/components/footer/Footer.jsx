import React from 'react'
import {FaLinkedinIn , FaGithub ,FaInstagram} from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a target="_blank" href="https://www.linkedin.com/in/shahwaz-khan-39a022260/
" className="footer__social-link">
                <FaLinkedinIn/>
                </a>

                <a target="_blank" href="https://github.com/shahwazkhan98
" className="footer__social-link">
                <FaGithub/>
                </a>

                <a target="_blank" href="https://instagram.com/mr_sheenu?igshid=ZDdkNTZiNTM=
" className="footer__social-link">
                <FaInstagram/>
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2023 <span>Copyright</span>. All Rights Reserved</p> 


           <p className="footer__copyright text-cs">
            Developed by <span>Shahwaz Khan</span></p> 
    </div>
    </footer>
  )
}

export default Footer
