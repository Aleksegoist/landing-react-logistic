import React from 'react';
import style from './Footer.module.css';
import LogoFooter from '../../assets/logo_footer.png';
import Facebook from '../../assets/facebook.png';
import Insta from '../../assets/insta.png';
import Twitter from '../../assets/twi.png';
import Linken from '../../assets/link.png';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footer_box}>
          <div className={style.first_block}>
            <img src={LogoFooter} alt='/' />
            <p>
              Our webapp, Sales Axis, is the platform for solution providers who
              are looking to connect with more front end sales & consultants.
            </p>
          </div>

          <div className={style.second_block}>
            <h2>Page’s</h2>
            <ul>
              <li>Product View</li>
              <li>User dashboard</li>
              <li>User's Lead page</li>
            </ul>
          </div>

          <div className={style.third_block}>
            <h2>About</h2>
            <ul>
              <li>Our Story</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className={style.four_block}>
            <h2>Subscribe to our newsletter</h2>
            <div>
              <input type='email' placeholder='Email address' />
              <button>Ok</button>
            </div>
            <div className={style.social}>
              <img src={Facebook} alt='/' />
              <img src={Insta} alt='/' />
              <img src={Twitter} alt='/' />
              <img src={Linken} alt='/' />
            </div>
          </div>
        </div>

        <div className={style.footer_bottom_text}>
          <p>All right rederved 2022 AYDev. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
