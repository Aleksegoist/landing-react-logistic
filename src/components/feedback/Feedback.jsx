import React from 'react';
import style from './Feedback.module.css';
import Raiting from '../../assets/rating.png';
import ArrowRight from '../../assets/arrow_right.png';

const Feedback = () => {
  return (
    <div className={style.feedback}>
      <div className='container'>
        <div className={style.text}>
          <h1>What Our User Say About Us</h1>
          <p>
            A best and cheapest way of getting know learning to make a better
            tomorrow.
          </p>
        </div>
        <div className={style.slider}>
          <div className={style.card}>
            <div className={style.vertical_line}></div>
            <div className={style.card_text}>
              <p>
                I'm a sales professional and I have been relying on Sales Axis
                to provide me with the best matching products. It's helped me
                close several deals and receive commissions effortlessly! I
                highly recommend this app!
              </p>
              <div className={style.desc}>
                <div>
                  <p>Daniel Sąsiadek</p>
                  <p>Sales Professional</p>
                </div>
                <div>
                  <img src={Raiting} alt='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bg_picture}>
          <div>
            <img src='' alt='/' />
            <img src='' alt='/' />
            <div>
              <p>See All Feedback</p>
              <img src={ArrowRight} alt='/' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
