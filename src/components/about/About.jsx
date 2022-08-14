import React from 'react';
import style from './About.module.css';

const About = () => {
  return (
    <div className={style.about}>
      <div className='container'>
        <div className={style.title}>
          <h1>Who We Are</h1>
          <p>
            Sales Axis is the platform for solution providers who are looking to
            connect with more front end sales & consultants. And it's for front
            end sales who are looking for new solution to sell. Simply fill out
            the required information, and you'll get matched with relevant
            solution providers.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
