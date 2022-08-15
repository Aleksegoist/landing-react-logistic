import React from 'react';
import style from './Feedback.module.css';
import Raiting from '../../assets/rating.png';
import ArrowRight from '../../assets/arrow_right.png';
import Man from '../../assets/man.png';
import Points from '../../assets/group.png';
import Pagination from '../../assets/pagination.png';

const Feedback = () => {
  return (
    <div className={style.feedback}>
      <div className='container'>
        <div className={style.feedback_box}>
          <div className={style.left}>
            <div className={style.text}>
              <h1>What Our User Say About Us</h1>
              <p>
                A best and cheapest way of getting know learning to make a
                better tomorrow.
              </p>
            </div>
            <div className={style.response}>
              <div className={style.pagination}>
                <img src={Pagination} alt='/' />
              </div>

              <div className={style.card}>
                <div className={style.vertical_line}></div>
                <div className={style.card_text}>
                  <div>
                    <p>
                      I'm a sales professional and I have been relying on Sales
                      Axis to provide me with the best matching products. It's
                      helped me close several deals and receive commissions
                      effortlessly! I highly recommend this app!
                    </p>
                  </div>
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
          </div>

          <div className={style.right}>
            <img className={style.points_image} src={Points} alt='/' />
            <div className={style.images_man}>
              <img src={Man} alt='/' />
            </div>
            <div className={style.feedback_arrow}>
              <p>See All Feedback</p>
              <img
                style={{ width: '12px', height: '8px' }}
                src={ArrowRight}
                alt='/'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
