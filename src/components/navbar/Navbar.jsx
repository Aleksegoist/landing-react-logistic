import React from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className={style.line}>
      <div className={style.navbar}>
        <div>
          <img src={Logo} alt='/' />
        </div>
        <div className={style.btn}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
