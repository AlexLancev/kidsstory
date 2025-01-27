import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';
import { toZonedTime } from 'date-fns-tz';
import { FaCheckCircle } from 'react-icons/fa';
import { bodyScroll } from 'utils/body-scroll';
import { IoClose } from 'react-icons/io5';

import { messages } from 'constans/messagesCurrentTime';

import { Checkbox, Button } from 'components';

import { FormValues, Schema } from 'utils/validationShema';


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
  const [currentText, setCurrentText] = useState<string>('');
  const [person, setPerson] = useState<FormValues | null>(null);
  const closeBntRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const innerTextRef = useRef<HTMLParagraphElement | null>(null);

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
    [focusableElements, isCloseModal],
  );

  useEffect(() => {
    if (isVisibleModal) {

      const getMoscowTime = (): number => {
        const timeZone = 'Europe/Moscow';
        const now = new Date();
        const moscowTime = toZonedTime(now, timeZone);
        return moscowTime.getHours();
      };

      const getCurrentText = (): string => {
        const moscowHour = getMoscowTime();

        if (moscowHour >= 7 && moscowHour < 19) {
          return messages.workHours;
        }

        if (moscowHour >= 0 && moscowHour < 6) {
          return messages.nightHours;
        }

        return messages.lateHours;
      };

      setCurrentText(getCurrentText());
    }
  }, [isVisibleModal]);

  useEffect(() => {
    if (isVisibleModal && modalRef && closeBntRef) {
      closeBntRef.current?.focus();

      modalRef.current?.addEventListener('keydown', handleClick);
      closeBntRef.current?.addEventListener('click', handleClick);
    }
  }, [handleClick, isVisibleModal]);

  useEffect(() => {
    let text: string = '';
    let position: number = 0;
    let isUnmounted: boolean = false;

    const getRandomInt = (min = 50, max = 100) => {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };

    const typeText = () => {
      if (isUnmounted) return;
      if (position < currentText.length) {
        text += currentText[position];
        position++;

        if (innerTextRef.current) {
          innerTextRef.current.innerText = text;
        }
        setTimeout(typeText, getRandomInt());
      }
    };

    if (isVisibleModal) {
      const timer = setTimeout(typeText, 2000);

      return () => {
        isUnmounted = true;
        clearTimeout(timer);
      };
    }
  }, [isVisibleModal, currentText]);

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
                placeholder='+7 (999) 999-99-99'
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
            <label className={styles.formLabel}>
              <textarea
                className={styles.formTextarea}
                lang='ru'
                spellCheck
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
        {errors.rulesCheckbox && (
          <span className={styles.formError}>{errors.rulesCheckbox.message}</span>
        )}
        <Button
          isCloseModal={isCloseModal}
          children={'Записаться'}
          variant={'primary'}
          size={'small'}
          type={'submit'}
        />
      </form>
      <div
        ref={modalRef}
        className={classNames(styles.modal, {
          [styles.modalActive]: isVisibleModal,
        })}
      >
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
          {isVisibleModal && <p className={styles.modalText} ref={innerTextRef}></p>}
        </div>
      </div>
    </>
  );
};
