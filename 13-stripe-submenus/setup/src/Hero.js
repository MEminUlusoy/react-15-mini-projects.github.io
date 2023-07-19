import React from 'react'
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
 
  return(
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>Dolor sit amet consectetur adipisicing elit. 
            Sit doloribus nisi eum debitis architecto assumenda! Animi 
            labore voluptate, facilis, eaque 
            eos enim quis harum iste placeat nesciunt nam. Labore, vitae.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt="phone" />
        </article>
      </div>
    </section>
  ); 
}

export default Hero
