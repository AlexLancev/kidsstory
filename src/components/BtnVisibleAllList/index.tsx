import { FC } from 'react';

import styles from './BtnVisibleAllList.module.css';

type BtnVisibleAllListPorps = {
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
};

export const BtnVisibleAllList: FC<BtnVisibleAllListPorps> = ({ setVisibleCount }) => {
  return (
    <button
      className={styles.btn}
      type='button'
      onClick={() => setVisibleCount((prev: number) => prev + 6)}
    >
      Показать ещё
    </button>
  );
};
