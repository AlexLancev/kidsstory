import React from 'react';

import styles from './AboutCenter.module.css';

export const AboutCenter: React.FC = () => {
  return (
    <section className={styles.aboutCenter}>
      <div className='container'>
        <h2 className={styles.aboutCenterTitle}>О нашем центре</h2>
        <p className={styles.aboutCenterText}>
          Мы создали пространство, в котором каждый ребёнок проявляет и
          раскрывает себя, развивает индивидуальные особенности и таланты.
        </p>
        <b className={styles.aboutCenterHead}>
          Наша задача — сделать так, чтобы каждый день в Kids story был
          счастливым.
        </b>
        <ul className={styles.aboutCenterList}>
          <li className={styles.aboutCenterListItem}>
            Английский детский клуб. Для детей с 2 до 7 лет. Погружение в
            языковую среду, собственная кухня, охраняемая огороженная
            территория, медицинский кабинет, соляная пещера.
          </li>
          <li className={styles.aboutCenterListItem}>
            Дополнительные услуги. Для детей с 2 до 18 лет. Развивающие студии,
            творческие мастерские, спортивные секции.
          </li>
          <li className={styles.aboutCenterListItem}>
            Kids story - «ежедневное развитие детей на 360 градусов».
          </li>
        </ul>
      </div>
    </section>
  );
};
