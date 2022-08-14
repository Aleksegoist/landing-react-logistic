import React from 'react';
import style from './Header.module.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.header_menu}>
          <img src={Logo} alt='/' />
          <div className={style.header_btn}>
            <button>Log in</button>
            <button>Sign Up</button>
          </div>
        </div>
        <div className={style.hero_content}>
          <div className={style.hero_title}>
            <h2>TRENDING PRODUCT</h2>
            <h1>Business Network for Logistics</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className={style.hero_btn}>
              <button>Product Commission: 12%</button>
              <button>Project Size Range: 500K USD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
