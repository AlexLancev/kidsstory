import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { BenefitsType } from 'types/api/benefits';

import { BenefitsLoader } from 'components';

import styles from './BenefitsList.module.css';

export const BenefitsList: FC = () => {
  const { benefitsArray, isLoading } = useSelector(
    (state: RootState) => state.benefits,
  );

  if (isLoading || !benefitsArray) {
    return null;
  }

  return (
    benefitsArray && (
      <ul className={styles.benefitsList}>
        {isLoading || !benefitsArray
          ? Array.from({ length: 6 }).map((_, index: number) => (
              <BenefitsLoader key={index} />
            ))
          : benefitsArray.map((item: BenefitsType, index: number) => (
              <li
                className={styles.benefitsListItem}
                key={item._id || index}
                style={{ backgroundImage: `url(${item.icon})` }}
              >
                <strong className={styles.benefitsHead}>{item.head}</strong>
              </li>
            ))}
      </ul>
    )
  );
};
