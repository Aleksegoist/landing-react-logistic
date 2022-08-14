import React from 'react';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className='container'>
        <div className={style.hero_content_box}>
          <div className={style.hero_content}>
            <div className={style.hero_title}>
              <h2>TRENDING PRODUCT</h2>
              <h1>Business Network for Logistics</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
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

export default Hero;
