import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { BenefitsType } from 'types/api/benefits';

import styles from './BenefitsList.module.css';

export const BenefitsList: React.FC = () => {
  const { benefitsArray, isLoading } = useSelector(
    (state: RootState) => state.benefits,
  );

  if (isLoading || !benefitsArray) {
    return null;
  }

  return (
    benefitsArray && (
      <ul className={styles.benefitsList}>
        {benefitsArray.map((item: BenefitsType, index: number) => (
          <li
            className={styles.benefitsListItem}
            key={item._id || index}
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <b className={styles.benefitsHead}>{item.head}</b>
          </li>
        ))}
      </ul>
    )
  );
};
