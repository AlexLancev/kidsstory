import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Feedback } from 'components/Feedback';
import { Menu } from 'components/Menu';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Footer.module.css';

export const Footer = () => {
  const [hasWindowSize, setHasWindowSize] = useState<boolean>(
    window.innerWidth >= 923,
  );

  useEffect(() => {
    const onChangeResize = () => {
      setHasWindowSize(window.innerWidth >= 923);
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
            <b className={styles.date}>{new Date().getFullYear()}</b>
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
