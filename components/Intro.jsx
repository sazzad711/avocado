import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.css'
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle   backgroundColor="#BA0F30" top="-45vh" left="-45vh" />
       <Circle  backgroundColor="#0A7029" right="-35vh" top="-5vh" /> 
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brandName}>AV0CAD0</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src= "/img/Avocado.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
