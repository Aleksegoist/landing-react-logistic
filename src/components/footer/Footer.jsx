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
              <li>
                <a href='/'>Product View</a>
              </li>
              <li>
                <a href='/'>User dashboard</a>
              </li>
              <li>
                <a href='/'>User's Lead page</a>
              </li>
            </ul>
          </div>

          <div className={style.third_block}>
            <h2>About</h2>
            <ul>
              <li>
                <a href='/'>Our Story</a>
              </li>
              <li>
                <a href='/'>Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className={style.four_block}>
            <h2>Subscribe to our newsletter</h2>
            <div className={style.footer_input}>
              <input type='email' placeholder='Email address' />
              <button>></button>
            </div>
            <div className={style.social}>
              <div className={style.bg_social}>
                <img src={Facebook} alt='/' />
              </div>
              <div className={style.bg_social}>
                <img src={Insta} alt='/' />
              </div>
              <div className={style.bg_social}>
                <img src={Twitter} alt='/' />
              </div>
              <div className={style.bg_social}>
                <img src={Linken} alt='/' />
              </div>
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
