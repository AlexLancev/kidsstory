import { NavLink } from 'react-router-dom';

import { Menu } from 'components/Menu';
import { Feedback } from 'components/Feedback';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerInner}>
          <NavLink to='/'>
            <Logo width={192} height={52} className='logo' />
          </NavLink>
          <Menu />
          <Feedback />
        </div>
      </div>
    </header>
  );
};
