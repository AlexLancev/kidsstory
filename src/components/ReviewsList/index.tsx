import { useState, useCallback, useMemo, FC, memo, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { Modal, LoaderReviews } from 'components';
import { bodyScroll } from 'utils/body-scroll';

import styles from './ReviewsList.module.css';

SwiperCore.use([Autoplay]);

interface ReviewsListType {
  isSlider?: boolean;
  extraClass?: string;
}

export const ReviewsList: FC<ReviewsListType> = memo(({ isSlider = false, extraClass = '' }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentReview, setCurrentReview] = useState<ReviewsType | null>(null);
  const [currentText, setCurrentText] = useState<ReviewsType | null>(null);
  const focusableElements = useRef<NodeListOf<HTMLElement> | null>(null);
  const innerTextRef = useRef<HTMLParagraphElement | null>(null);
  const prevCurrentRef = useRef<HTMLButtonElement | null>(null);
  const btnCloseRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const { reviewsArray, isLoading } = useSelector((state: RootState) => state.reviews);

  const handleClick = useCallback((review: ReviewsType, buttonRef: HTMLButtonElement) => {
    setCurrentReview(review);
    setIsModalVisible(true);
    setCurrentText(review);
    prevCurrentRef.current = buttonRef;
    bodyScroll.lock();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      if (isModalVisible) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (isModalVisible && modalRef.current) {
      focusableElements.current = modalRef.current.querySelectorAll(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
    }
  }, [isModalVisible]);

  const handleClickModal = useCallback((e: Event) => {
    if (e instanceof KeyboardEvent) {
      if (e.key === 'Tab' && focusableElements.current) {
        const firstElement = focusableElements.current[0] as HTMLElement;
        const lastElement = focusableElements.current[
          focusableElements.current.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
        return;
      }

      if (e.key === 'Escape') {
        setIsModalVisible(false);
        if (prevCurrentRef.current) {
          prevCurrentRef.current.focus();
          prevCurrentRef.current = null;
        }
        bodyScroll.unLock();
      }
    }

    if (e instanceof MouseEvent) {
      if (e.type === 'click') {
        setIsModalVisible(false);
        if (prevCurrentRef.current) {
          prevCurrentRef.current.focus();
          prevCurrentRef.current = null;
        }
        bodyScroll.unLock();
      }
    }
  }, []);

  useEffect(() => {
    if (isModalVisible && modalRef.current && btnCloseRef.current) {
      btnCloseRef.current?.focus();

      modalRef.current?.addEventListener('keydown', handleClickModal);
      btnCloseRef.current?.addEventListener('click', handleClickModal);
    }
  }, [handleClickModal, isModalVisible]);

  useEffect(() => {
    let text: string = '';
    let position: number = 0;
    let isUnmounted: boolean = false;

    const getRandomInt = (min = 50, max = 100) => {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };

    const typeText = () => {
      if (isUnmounted) return;
      if (currentText) {
        if (position < currentText?.description?.length) {
          text += currentText.description[position];
          position++;

          if (innerTextRef.current) {
            innerTextRef.current.innerText = text;
          }
          setTimeout(typeText, getRandomInt());
        }
      }
    };

    if (isModalVisible) {
      const timer = setTimeout(typeText, 2000);

      return () => {
        isUnmounted = true;
        clearTimeout(timer);
      };
    }
  }, [isModalVisible, currentText]);

  const renderReviewItem = useCallback(
    (itemReview: ReviewsType) => (
      <li className={`${styles.reviewsCurrent} ${extraClass}`} key={itemReview._id}>
        <div className={styles.reviewsPerson}>
          <img
            className={styles.reviewsPersonImg}
            width={60}
            src={itemReview.image}
            alt=''
            loading='lazy'
            aria-hidden
          />
          <div className={styles.person}>
            <strong className={styles.reviewsName}>{itemReview.whoseReview}</strong>
            <span className={styles.reviewsSity}>{itemReview.sity}</span>
          </div>
        </div>
        <p className={styles.reviewsDescription}>{itemReview.description}</p>
        <button
          ref={(ref) => (prevCurrentRef.current = ref)}
          className={styles.reviewsBtn}
          type='button'
          onClick={(e) => handleClick(itemReview, e.currentTarget)}
        >
          Прочитать весь отзыв
        </button>
      </li>
    ),
    [extraClass, handleClick],
  );

  const reviewItems = useMemo(
    () => reviewsArray?.map((itemReview) => renderReviewItem(itemReview)),
    [reviewsArray, renderReviewItem],
  );

  if (isSlider) {
    return (
      <>
        <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView={2}
  pagination={{ clickable: true, dynamicBullets: true }}
  loop
  autoplay={{ delay: 3000 }} // Включаем автоплей
  breakpoints={{
    1440: { spaceBetween: 50, slidesPerView: 2 },
    768: { spaceBetween: 20 },
    320: { spaceBetween: 10, slidesPerView: 1 },
  }}
>
          {isLoading || !reviewsArray || reviewsArray.length === 0
            ? Array.from({ length: 13 }).map((_, index) => (
                <SwiperSlide key={index} className={styles.reviewsListItem}>
                  <LoaderReviews backgroundColor='#FFFFFF' />
                </SwiperSlide>
              ))
            : reviewItems?.map((itemReview, index) => (
                <SwiperSlide key={itemReview?.key ?? index} className={styles.reviewsListItem}>
                  <ul className={styles.reviewsList}>{itemReview}</ul>
                </SwiperSlide>
              ))}
        </Swiper>
        {isModalVisible && currentReview && (
          <Modal
            innerTextRef={innerTextRef}
            modalRef={modalRef}
            btnCloseRef={btnCloseRef}
            review={currentReview}
          />
        )}
      </>
    );
  }

  if (isLoading || !reviewsArray || reviewsArray?.length === 0) {
    return (
      <ul className={styles.reviewsList}>
        {Array.from({ length: 13 }).map((_, index: number) => (
          <LoaderReviews key={index} />
        ))}
      </ul>
    );
  }

  return (
    <>
      <ul className={styles.reviewsList}>{reviewItems}</ul>
      {isModalVisible && currentReview && (
        <Modal
          innerTextRef={innerTextRef}
          modalRef={modalRef}
          btnCloseRef={btnCloseRef}
          review={currentReview}
        />
      )}
    </>
  );
});
