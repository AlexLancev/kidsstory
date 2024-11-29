import { useState, MouseEvent, FC } from 'react';

import { dailyDietImagesArray } from 'constans/DailyDietImagesArray';

import dailyDietImg from '../../img/daily-diet/daily-diet-1.webp';

import styles from './DailyDietListImg.module.css';

export const DailyDietListImg: FC = () => {
  const [urlImage, setUrlImage] = useState<string | undefined>(dailyDietImg);
  const handleClick = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.dataset.img) {
      setUrlImage(target.src);
    }
  };

  if (!dailyDietImagesArray || dailyDietImagesArray.length === 0) return null;

  return (
    <div className={styles.dailyDiet}>
      <img
        className={styles.dailyDietListImgPreview}
        src={urlImage}
        width={702}
        height={421}
        alt=''
        loading='lazy'
        aria-hidden
      />
      <ul className={styles.dailyDietList} onClick={handleClick}>
        {dailyDietImagesArray.map((item, index: number) => (
          <li className={styles.dailyDietListItem} key={item.id || index}>
            <button className={styles.dailyDietListImgBtn} type='button'>
              <img
                className={styles.dailyDietListImg}
                src={item.imageUrl}
                width={217}
                height={130}
                alt=''
                loading='lazy'
                aria-hidden
                data-img
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
