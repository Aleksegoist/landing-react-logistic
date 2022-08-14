import React from 'react';
import style from './Products.module.css';
import Prod1 from '../../assets/product1.png';
import Prod2 from '../../assets/product2.png';
import Prod3 from '../../assets/product3.png';

import Commission from '../../assets/comissions.png';
import Dollar from '../../assets/dollar.png';

const Products = () => {
  return (
    <div className={style.products}>
      <div className='container'>
        <h1>Top Products by Leads Industries</h1>
        <div className={style.products_box}>
          <div className={style.product_card}>
            <div className={style.content_top}>
              <img src={Prod1} alt='/' />
              <h4>Consulting</h4>
              <p>
                Southeast Asia market research and management consulting
                services
              </p>
            </div>
            <div className={style.content_bottom}>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '12px', height: '15px' }}
                    src={Commission}
                    alt='/'
                  />
                  <p>Commission</p>
                </div>
                <div className={style.info_right}>
                  <p>15%</p>
                </div>
              </div>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '14px', height: '14px' }}
                    src={Dollar}
                    alt='/'
                  />
                  <p>Project size range:</p>
                </div>
                <div className={style.info_right_bottom}>
                  <p>$50K+</p>
                </div>
              </div>
            </div>
          </div>

          {/* ----- Card2 ----- */}
          <div className={style.product_card}>
            <div className={style.content_top}>
              <img src={Prod2} alt='/' />
              <h4>Management</h4>
              <p>
                Corporate Management Software & Enterprise Resource Planning
                (ERP)
              </p>
            </div>
            <div className={style.content_bottom}>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '12px', height: '15px' }}
                    src={Commission}
                    alt='/'
                  />
                  <p>Commission</p>
                </div>
                <div className={style.info_right}>
                  <p>20%</p>
                </div>
              </div>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '14px', height: '14px' }}
                    src={Dollar}
                    alt='/'
                  />
                  <p>Project size range:</p>
                </div>
                <div className={style.info_right_bottom}>
                  <p>$80K+</p>
                </div>
              </div>
            </div>
          </div>

          {/* ----- Card3 ----- */}
          <div className={style.product_card}>
            <div className={style.content_top}>
              <img src={Prod3} alt='/' />
              <h4>Helthcare</h4>
              <p>Wholesale Consumer Goods & Personal Protection Equipment</p>
            </div>
            <div className={style.content_bottom}>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '12px', height: '15px' }}
                    src={Commission}
                    alt='/'
                  />
                  <p>Commission</p>
                </div>
                <div className={style.info_right}>
                  <p>4%</p>
                </div>
              </div>
              <div className={style.info}>
                <div className={style.info_left}>
                  <img
                    style={{ width: '14px', height: '14px' }}
                    src={Dollar}
                    alt='/'
                  />
                  <p>Project size range:</p>
                </div>
                <div className={style.info_right_bottom}>
                  <p>$100K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
