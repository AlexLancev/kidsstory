import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Checkbox } from 'components/Checkbox';
import { Button } from 'components/Button';

import { FormValues, Schema } from 'utils/validationShema';

import styles from './Form.module.css';

yup.object().shape({
  name: Schema.fields.name,
  phone: Schema.fields.phone,
  email: Schema.fields.email,
  comments: Schema.fields.comments,
  rulesCheckbox: Schema.fields.rulesCheckbox,
});
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.formFieldset}>
        {/* <label className={styles.formLabel}>
          <input
            className={styles.formInput}
            type='text'
            placeholder='Ваше имя'
            {...register('name')}
          />
          {errors.name && (
            <span className={styles.formError}>{errors.name.message}</span>
          )}
        </label> */}
        <label className={styles.formLabel}>
          <input
            className={styles.formInput}
            type='tel'
            placeholder='Номер телефона'
            {...register('phone')}
          />
          {errors.phone && (
            <span className={styles.formError}>{errors.phone.message}</span>
          )}
        </label>
        {/* <label className={styles.formLabel}>
          <input
            className={styles.formInput}
            type='email'
            placeholder='Ваш e-mail'
            {...register('email')}
          />
          {errors.email && (
            <span className={styles.formError}>{errors.email.message}</span>
          )}
        </label> */}
        {/* <label className={`${styles.formLabel} ${styles.formlabelTxt}`}>
          <textarea
            className={styles.formTextarea}
            placeholder='Комментарий'
            {...register('comments')}
          ></textarea>
          {errors.comments && (
            <span className={styles.formError}>{errors.comments.message}</span>
          )}
        </label> */}
      </fieldset>
      <Checkbox
        register={register('rulesCheckbox')}
        children={'Я принимаю условия пользовательского соглашения'}
      />
      <Button
        children={'Записаться'}
        variant={'primary'}
        size={'small'}
        type={'submit'}
      />
    </form>
  );
};
