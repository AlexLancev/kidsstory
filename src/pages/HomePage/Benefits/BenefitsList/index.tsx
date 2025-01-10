import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { BenefitsLoader } from 'components';

import styles from './BenefitsList.module.css';

export const BenefitsList = () => {
  const { benefitsArray, isLoading } = useSelector((state: RootState) => state.benefits);

  if (isLoading || !benefitsArray || benefitsArray.length === 0) {
    return (
      <ul className={styles.benefitsList}>
        {Array.from({ length: 6 }).map((_, index: number) => (
          <BenefitsLoader key={index} />
        ))}
      </ul>
    );
  }

  return (
    <ul className={styles.benefitsList}>
      {benefitsArray.map(({ _id, icon, head }: BenefitsType, index: number) => (
        <li
          className={styles.benefitsListItem}
          key={_id ?? index}
          style={{ backgroundImage: `url(${icon})` }}
        >
          <strong className={styles.benefitsHead}>{head}</strong>
        </li>
      ))}
    </ul>
  );
};
