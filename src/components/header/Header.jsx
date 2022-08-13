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
        <div className={style.header_content}></div>
      </div>
    </div>
  );
};

export default Header;
