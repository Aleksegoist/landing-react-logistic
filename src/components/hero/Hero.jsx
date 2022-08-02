import React from 'react';
import style from './Hero.module.css';
import Background from '../../assets/background.png';

const Hero = () => {
  return (
    <div className={style.hero}>
      <img src={Background} alt='/' />

      <div className={style.block}>
        <div className={style.header}>
          <h2>TRENDING PRODUCT</h2>
          <h1>Business Network for Logistics</h1>
        </div>
        <div>
          <div className={style.desc}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
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
