import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Checkbox, Button } from 'components';

import { FormValues, Schema } from 'utils/validationShema';

import { FaCheckCircle } from 'react-icons/fa';
import { bodyScroll } from 'utils/body-scroll';
import { IoClose } from 'react-icons/io5';

import styles from './Form.module.css';

export type FormVisibleProps = {
  extraClass?: string;
  isVisibleName?: boolean;
  isVisiblePhone?: boolean;
  isVisibleMail?: boolean;
  isVisibleCooment?: boolean;
};

yup.object().shape({
  name: Schema.fields.name,
  phone: Schema.fields.phone,
  email: Schema.fields.email,
  comments: Schema.fields.comments,
  rulesCheckbox: Schema.fields.rulesCheckbox,
});

export const Form: FC<FormVisibleProps> = ({
  extraClass,
  isVisibleName = false,
  isVisiblePhone = false,
  isVisibleMail = false,
  isVisibleCooment = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
  });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [isCloseModal, setIsCloseModal] = useState<boolean>(false);
  const [person, setPerson] = useState<FormValues | null>(null);
  const closeBntRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    setPerson(data);
    reset();
    bodyScroll.lock();
    setIsVisibleModal(true);
    setIsCloseModal(!isCloseModal);
  };

  let focusableElements: NodeListOf<HTMLElement> | null | undefined = null;

  if (isVisibleModal && modalRef) {
    focusableElements = modalRef.current?.querySelectorAll(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
  }

  const handleClick = useCallback(
    (e: Event) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === 'Tab') {
          if (!focusableElements || focusableElements.length === 0) {
            return;
          }

          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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
          setIsVisibleModal(false);
          setIsCloseModal(!isCloseModal);
          bodyScroll.unLock();
        }
      }

      if (e instanceof MouseEvent) {
        if (e.type === 'click') {
          setIsVisibleModal(false);
          setIsCloseModal(!isCloseModal);
          bodyScroll.unLock();
        }
      }
    },
    [focusableElements],
  );

  useEffect(() => {
    if (isVisibleModal && modalRef && closeBntRef) {
      closeBntRef.current?.focus();

      modalRef.current?.addEventListener('keydown', handleClick);
      closeBntRef.current?.addEventListener('click', handleClick);
    }
  }, [handleClick, isVisibleModal]);

  return (
    <>
      <form className={extraClass} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.formFieldset}>
          {isVisibleName && (
            <label className={styles.formLabel}>
              <input
                className={styles.formInput}
                type='text'
                placeholder='Ваше имя'
                {...register('name')}
              />
              {errors.name && <span className={styles.formError}>{errors.name.message}</span>}
            </label>
          )}
          {isVisiblePhone && (
            <label className={styles.formLabel}>
              <input
                className={styles.formInput}
                type='tel'
                placeholder='Номер телефона'
                {...register('phone')}
              />
              {errors.phone && <span className={styles.formError}>{errors.phone.message}</span>}
            </label>
          )}
          {isVisibleMail && (
            <label className={styles.formLabel}>
              <input
                className={styles.formInput}
                type='email'
                placeholder='Ваш e-mail'
                {...register('email')}
              />
              {errors.email && <span className={styles.formError}>{errors.email.message}</span>}
            </label>
          )}
          {isVisibleCooment && (
            <label className={`${styles.formLabel} ${styles.formlabelTxt}`}>
              <textarea
                className={styles.formTextarea}
                placeholder='Комментарий'
                {...register('comments')}
              ></textarea>
              {errors.comments && (
                <span className={styles.formError}>{errors.comments.message}</span>
              )}
            </label>
          )}
        </fieldset>
        <Checkbox
          register={register('rulesCheckbox')}
          children={'Я принимаю условия пользовательского соглашения'}
        />
        <Button
          isCloseModal={isCloseModal}
          children={'Записаться'}
          variant={'primary'}
          size={'small'}
          type={'submit'}
        />
      </form>
      {isVisibleModal && (
        <div ref={modalRef} className={styles.modal}>
          <div className={styles.modalInner}>
            <button
              className={styles.modalBtn}
              onClick={() => handleClick}
              type='button'
              title='Закрыть модальное окно'
              ref={closeBntRef}
            >
              <IoClose className={styles.modalIconClose} />
              <span className='visually-hidden'>Закрыть модальное окно</span>
            </button>
            <FaCheckCircle className={styles.modalIconChecked} />
            <strong className={styles.modalHead}>
              {person?.name ? `${person.name}, заявка` : 'Заявка'} отправлена.
            </strong>
            <p className={styles.modalText}>Мы свяжемся с вами в течении 10 минут. Спасибо!</p>
            <a href='#' style={{ color: 'red' }}>
              ffd
            </a>
            <a href='#' style={{ color: 'red' }}>
              ffd
            </a>
            <a href='#' style={{ color: 'red' }}>
              ffd
            </a>
          </div>
        </div>
      )}
    </>
  );
};
