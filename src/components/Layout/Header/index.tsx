import { Menu } from 'components/Menu';
import { Feedback } from 'components/Feedback';

import Logo from 'assets/img/svg/logo.svg?react';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Logo width={192} height={52} />
          <Menu />
          <Feedback />
        </div>
      </div>
    </header>
  );
};
