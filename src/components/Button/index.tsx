import { FC, ReactNode, useEffect, useRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isCloseModal: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  size = 'medium',
  disabled = false,
  type = 'button',
  isCloseModal,
}) => {
  const previousBntRef = useRef<HTMLButtonElement | null>(null);
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
  ].join(' ');

  useEffect(() => {
    if (isCloseModal && previousBntRef) {
      previousBntRef.current?.focus();
    }
  });

  return (
    <button
      ref={previousBntRef}
      type={type}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};
