import * as yup from 'yup';

export interface FormValues {
  name?: string;
  phone: string;
  email?: string;
  comments?: string | undefined;
  rulesCheckbox: boolean;
}

export const Schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя не должно содержать цифр или специальных символов'),
  phone: yup
    .string()
    .matches(
      /^(?:\+7|8)\s?(?:\(\d{3}\)|\d{3})(?:[\s-]?\d+)*$/,
      'Номер телефона должен начинаться с +7 или 8, скобки должны быть парными, пробелов или дефисов не должно быть больше 2-х подряд',
    )
    .test(
      'valid-length',
      'Номер телефона должен содержать ровно 11 цифр',
      function (value: string | undefined) {
        const digits = value?.replace(/[^\d]/g, '');
        return (digits?.length ?? 0) === 11;
      },
    )
    .required('Телефон обязателен'),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Введите корректную почту',
    ),
  comments: yup.string(),
  rulesCheckbox: yup
    .boolean()
    .oneOf([true], 'Для того что бы отправить заявку, Вы должны принять правила')
    .required(),
});
