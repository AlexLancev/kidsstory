import { useState, useEffect, useRef, FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { bodyScroll } from 'utils/body-scroll';

import styles from './Menu.module.css';

interface MenuProps {
  isVisible?: boolean;
}

export const Menu: FC<MenuProps> = ({ isVisible = true }) => {
  const [visibleSubMenuIndex, setVisibleSubMenuIndex] = useState<number | null>(
    null,
  );
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(true);
  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const handleSubMenuToggle = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setVisibleSubMenuIndex(visibleSubMenuIndex === index ? null : index);
  };

  const handleClickOutside = () => {
    setVisibleSubMenuIndex(null);
  };

  useEffect(() => {
    if (visibleSubMenuIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visibleSubMenuIndex]);

  const handleMenuClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(`.${styles.itemLink}`)) {
      setIsVisibleMenu(false);
    }
  };

  return (
    isVisibleMenu && (
      <div className={styles.menuWrapper}>
        <nav
          className={styles.nav}
          onClick={(e) => handleMenuClick(e)}
          aria-label='Главное меню сайта'
        >
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <NavLink className={styles.itemLink} to='/about'>
                  О нас
                </NavLink>
                {isVisible && (
                  <button
                    className={styles.navLinkBtn}
                    type='button'
                    title='Открыть под меню'
                    onClick={(e) => handleSubMenuToggle(0, e)}
                  ></button>
                )}
              </div>
              {visibleSubMenuIndex === 0 && (
                <div className={styles.navSubmenuWrapper}>
                  <ul ref={subMenuRef} className={`${styles.navSubmenuList}`}>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/program'
                      >
                        Программа
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/daily-diet'
                      >
                        Питание на 1 день
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/price'
                      >
                        Цены
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/reviews'
                      >
                        Отзывы
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/documents'
                      >
                        Документы
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.listItem}>
              <NavLink className={styles.itemLink} to='/services'>
                Занятия
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <span className={styles.itemLink}>Расписание</span>
                {isVisible ? (
                  <button
                    className={styles.navLinkBtn}
                    type='button'
                    title='Открыть под меню'
                    onClick={(e) => handleSubMenuToggle(1, e)}
                  ></button>
                ) : (
                  ''
                )}
              </div>
              {visibleSubMenuIndex === 1 && (
                <div className={styles.navSubmenuWrapper}>
                  <ul ref={subMenuRef} className={`${styles.navSubmenuList}`}>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/schedule-group'
                      >
                        Расписание групп
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink
                        className={styles.navSubmenuItemLink}
                        to='/daily-routine'
                      >
                        Режим дня на холодный период
                      </NavLink>
                    </li>
                    <li className={styles.navSubmenuListItem}>
                      <NavLink className={styles.navSubmenuItemLink} to='/'>
                        Расписание дополнительных занятий
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.listItem}>
              <NavLink className={styles.itemLink} to='/gallery'>
                Фото и видео
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink className={styles.itemLink} to='/team'>
                Команда
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink className={styles.itemLink} to='/contacts'>
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};
