import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Checkbox.module.css';

export interface CheckboxProps {
  children: string;
  register: UseFormRegisterReturn;
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, register }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input type='checkbox' className={styles.checkboxInput} {...register} />
      <span className={styles.checkboxText}>{children}</span>
    </label>
  );
};
