import * as yup from 'yup';

export interface FormValues {
  name: string;
  phone: string;
  email: string;
  comments?: string | undefined;
  rulesCheckbox: boolean;
}

export const Schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Имя не должно содержать цифр или специальных символов',
    ),
  phone: yup
    .string()
    .test(
      'is-11-digits',
      'Номер телефона должен содержать 11 цифр',
      (value: string | undefined) => {
        const digitsOnly = value ? value.replace(/\D/g, '') : '';
        return digitsOnly.length === 11;
      },
    )
    .required('Телефон обязателен'),
  email: yup
    .string()
    .required('Почта обязательна')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Введите корректную почту'),
  comments: yup.string(),
  rulesCheckbox: yup.boolean().oneOf([true]).required(),
});
