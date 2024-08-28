import { NavLink } from 'react-router-dom';

import { Feedback } from 'components/Feedback';
import { Menu } from 'components/Menu';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <NavLink to={``}>
          <Logo width={192} height={52} />
        </NavLink>
        <div className={styles.footerInner}>
          <Feedback />
          <Menu />
        </div>
        <div className={styles.footerBottom}>
          <span>
            Copyrights: Kids Story
            <b className={styles.date}>{new Date().getFullYear()}</b>
          </span>
          <a
            className={styles.dev}
            href='https://github.com/AlexLancev'
            target='__blank'
          >
            Разработано
          </a>
        </div>
      </div>
    </footer>
  );
};
