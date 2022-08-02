import React from 'react';
import style from './Hero.module.css';
import Background from '../../assets/background.png';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div>
        <img src={Background} alt='/' />
      </div>

      <div className={style.block}>
        <div className={style.text}>
          <h2>TRENDING PRODUCT</h2>
          <h1>Business Network for Logistics</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className={style.buttons}>
          <p>Product Commission: 12%</p>
          <p>Project Size Range: 500K USD</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
