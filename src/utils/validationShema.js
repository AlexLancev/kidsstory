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
    .matches(/^\d{11}$/, 'Номер телефона должен содержать 11 цифр')
    .required('Телефон обязателен'),
  family: yup
    .string()
    .required('Фамилия обязательно')
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ]+$/,
      'Фамилия не должна содержать цифр или специальных символов',
    ),
  email: yup
    .string()
    .required('Почта обязательно')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Введите корректную почту'),
});

export default schema;
