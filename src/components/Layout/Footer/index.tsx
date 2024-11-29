import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Feedback, Menu } from 'components';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Footer.module.css';

export const Footer = () => {
  const [hasWindowSize, setHasWindowSize] = useState<boolean>(
    window.innerWidth >= 1024,
  );

  useEffect(() => {
    const onChangeResize = () => {
      setHasWindowSize(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', onChangeResize);

    return () => {
      window.removeEventListener('resize', onChangeResize);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <NavLink to='/'>
          <Logo width={192} height={52} />
        </NavLink>
        <div className={styles.footerInner}>
          <Feedback />
          {hasWindowSize && <Menu isVisible={false} />}
        </div>
        <div className={styles.footerBottom}>
          <span>
            Copyrights: Kids Story
            <strong className={styles.date}>{new Date().getFullYear()}</strong>
          </span>
          <a
            className={styles.dev}
            href='https://github.com/AlexLancev'
            target='_blank'
            rel='noopener noreferrer'
          >
            Разработано
          </a>
        </div>
      </div>
    </footer>
  );
};
