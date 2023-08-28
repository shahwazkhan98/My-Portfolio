import React from 'react'
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import CV from '../../assets/Shahwaz-Khan-CV.pdf'
import {FaLinkedinIn , FaGithub ,FaInstagram} from 'react-icons/fa';
import './Home.css'
const Home = () => {
  return (
    <>
      <section className="home" id="home">
       <div className="home__wrapper">
       <div className="home__container container">
        <p className="home__subtitle text-cs">
          Hello, <span>My Name Is</span>
        </p>
        <h1 className="home__title text-cs">
          <span>Shahwaz</span> Khan
        </h1>
      <p className="home__job">
        <span className="text-cs">I Am </span> <b>Web Developer</b>
      </p>

      <div className="home__img-wrapper">
        <div className="home__banner">
          <img src={profileImg} alt="" className="home__profile"/>
        </div>

        <p className="home__data home__data-one">
          <span className="text-lg">
             1<b>+</b> 
          </span>
          
          <span className="text-sm">
             Year of <span>Experience</span> 
          </span>
        </p>

        <p className="home__data home__data-two">
          <span className="text-lg">
             30
          </span>
          
          <span className="text-sm">
             Completed <span>Projects</span> 
          </span>
        </p>

        <img src={shapeOne} alt="" className="shape shape__1" />
        <img src={shapeTwo} alt="" className="shape shape__2" />
        <img src={shapeTwo} alt="" className="shape shape__3" />
      </div>

      <p className="home__text">
        From Indore, Madhya Pradesh. I have experience in web design, I love to talk with you about our unique
      </p>

      <div className="home__socials">
        <a target="_blank" href="https://www.linkedin.com/in/shahwaz-khan-39a022260/
" className="home__social-link">
          <FaLinkedinIn/>
        </a>

        <a target="_blank" href="https://github.com/shahwazkhan98
" className="home__social-link">
          <FaGithub/>
        </a>

        <a target="_blank" href="https://instagram.com/mr_sheenu?igshid=ZDdkNTZiNTM=
" className="home__social-link">
          <FaInstagram/>
        </a>
      </div>

      <div className="home__btns">
        <a download='' href={CV} className="btn text-cs">
          Download CV
        </a>

        <a href="#skills" className="hero__link text-cs">
          My Skills
        </a>
      </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} className='shape' alt="" />
      </div>
       </div>

       <div className="section__bg-wrapper">
        <span className="bg__title"> Web Developer</span>
       </div>
      </section>
    </>
  )
}

export default Home
