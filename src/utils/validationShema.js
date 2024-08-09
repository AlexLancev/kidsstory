import * as yup from 'yup';

const schema = yup.object().shape({
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
      (value) => {
        const digitsOnly = value.replace(/\D/g, '');
        return digitsOnly.length === 11;
      },
    )
    .required('Телефон обязателен'),
  email: yup
    .string()
    .required('Почта обязательно')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Введите корректную почту'),
  comments: yup.string(),
  rulesCheckbox: yup
    .mixed()
    .oneOf([true], 'Необходимо согласие с условиями акции'),
});

export default schema;
