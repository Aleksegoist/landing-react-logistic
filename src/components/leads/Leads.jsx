import React from 'react';
import style from './Leads.module.css';

const Leads = () => {
  return (
    <div className={style.leads}>
      <div className='container'>
        <h1>Top Successful Type of Leads</h1>
        <div className={style.leads_box}>
          {/* ---- Card1 ----- */}
          <div className={style.leads_card}>
            <div className={style.left_side}>
              <h2>Manufacturing execution systems (Mes)</h2>
              <h3>Operation Director / COO</h3>
              <p>
                Do you have any leads match the same position? Lets connect and
                earn commission.
              </p>
            </div>
            <div className={style.central_side}>
              <p>27%</p>
              <p>Conversion rate</p>
            </div>
            <div className={style.right_side}>
              <p>$10K</p>
              <p>Average Commission </p>
            </div>
          </div>

          {/* ---- Card2 ----- */}
          <div className={style.leads_card}>
            <div className={style.left_side}>
              <h2>Fieldglass Contingent Workforce Management</h2>
              <h3>HR Director / COO</h3>
              <p>
                Do you have any leads match the same position? Lets connect and
                earn commission.
              </p>
            </div>
            <div className={style.central_side}>
              <p>19%</p>
              <p>Conversion rate</p>
            </div>
            <div className={style.right_side}>
              <p>$14K</p>
              <p>Average Commission </p>
            </div>
          </div>

          {/* ---- Card3 ----- */}
          <div className={style.leads_card}>
            <div className={style.left_side}>
              <h2>Enterprise Resource Planning (ERP)</h2>
              <h3>Business Owner / CEO / COO </h3>
              <p>
                Do you have any leads match the same position? Lets connect and
                earn commission.
              </p>
            </div>
            <div className={style.central_side}>
              <p>31%</p>
              <p>Conversion rate</p>
            </div>
            <div className={style.right_side}>
              <p>$50K</p>
              <p>Average Commission </p>
            </div>
          </div>

          {/* ---- Card4 ----- */}
          <div className={style.leads_card}>
            <div className={style.left_side}>
              <h2>Wholesale Consumer Goods: Personal Protection Equipment</h2>
              <h3>Procurement Director / Product Manager</h3>
              <p>
                Do you have any leads match the same position? Lets connect and
                earn commission.
              </p>
            </div>
            <div className={style.central_side}>
              <p>22%</p>
              <p>Conversion rate</p>
            </div>
            <div className={style.right_side}>
              <p>$8K</p>
              <p>Average Commission </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
