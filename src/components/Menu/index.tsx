import { useState, useEffect, useRef, FC, useCallback, MouseEvent as ReactMouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useGettingWindowWidth } from 'hooks/gettingWindowWidth';

import { bodyScroll } from 'utils/body-scroll';

import { MenuItems } from 'constans/MenuItems';

import styles from './Menu.module.css';

interface MenuProps {
  isVisible?: boolean;
  isActiveMenu?: boolean;
  setIsActiveMenu?: (isActiveMenu: boolean) => void;
}

export const Menu: FC<MenuProps> = ({
  isVisible = true,
  isActiveMenu = false,
  setIsActiveMenu = () => {},
}) => {
  const [visibleSubMenuIndex, setVisibleSubMenuIndex] = useState<number | null>(null);
  const subMenuRef = useRef<HTMLUListElement | null>(null);
  const windowWidth = useGettingWindowWidth();

  const handleSubMenuToggle = (index: number, event: ReactMouseEvent) => {
    event.stopPropagation();
    setVisibleSubMenuIndex(visibleSubMenuIndex === index ? null : index);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!subMenuRef.current?.contains(target)) {
      setVisibleSubMenuIndex(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const handleMenuClick = (event: ReactMouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      target.closest(`[data-link]`) &&
      isActiveMenu &&
      windowWidth < 1024 &&
      !target.closest(`[aria-current="page"]`)
    ) {
      setIsActiveMenu(!isActiveMenu);
      bodyScroll.unLock();
      setVisibleSubMenuIndex(null);
    } else if (!isActiveMenu && windowWidth > 1024) {
      bodyScroll.unLock();
      setVisibleSubMenuIndex(null);
    }
  };

  const isSubMenuVisible = (index: number) => {
    return visibleSubMenuIndex === index ? 'Закрыть под меню' : 'Открыть под меню';
  };

  return (
    <div
      className={classNames(styles.menuWrapper, {
        [styles['menuWrapper--active']]: isActiveMenu,
      })}
      style={windowWidth < 1024 ? { transition: 'visibility 0.8s 0.4s' } : {}}
    >
      <nav
        className={classNames(styles.nav, {
          [styles['nav--active']]: isActiveMenu,
        })}
        onClick={handleMenuClick}
        aria-label='Главное меню сайта'
        style={windowWidth < 1024 ? { transition: 'transform 0.3s 0.8s' } : {}}
      >
        <ul className={styles.navList}>
          {MenuItems?.map((group, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.listItemWrapper}>
                <NavLink className={styles.itemLink} to={group[0]?.patchName} data-link>
                  {group[0]?.text}
                </NavLink>
                {!isVisible ||
                  (group.length > 1 && (
                    <button
                      className={classNames(styles.navLinkBtn, {
                        [styles['navLinkBtn--active']]: visibleSubMenuIndex === index,
                      })}
                      type='button'
                      aria-expanded={visibleSubMenuIndex === index}
                      title={isSubMenuVisible(index)}
                      onClick={(event) => handleSubMenuToggle(index, event)}
                      data-btn
                    >
                      <span className='visually-hidden'>{isSubMenuVisible(index)}</span>
                    </button>
                  ))}
              </div>
              {visibleSubMenuIndex === index && group.length > 1 && (
                <div className={styles.navSubmenuWrapper}>
                  <ul ref={subMenuRef} className={styles.navSubmenuList}>
                    {group.map(({ patchName, text }, subIndex) => (
                      <li key={subIndex} className={styles.navSubmenuListItem}>
                        <NavLink className={styles.navSubmenuItemLink} to={patchName} data-link>
                          {text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
