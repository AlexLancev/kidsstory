import { scheduleGroupType } from 'types/const/scheduleGroupType';

export const scheduleGroupData: scheduleGroupType[] = [
  {
    groupName: 'Младшая группа 1-2 года',
    scheduleData: [
      {
        day: 'Пн',
        schedule: [
          { id: '1', time: '9:00 – 9:15', subject: 'Музыка' },
          { id: '2', time: '9:20 – 9:35', subject: 'Окружающий мир' },
          {
            id: '3',
            time: '9:50 – 10:05',
            subject: 'Лепка / Аппликация',
          },
          {
            id: '4',
            time: '10:10 – 10:40',
            subject: 'Наблюдение психолога в период адаптации',
          },
        ],
      },
      {
        day: 'Вт',
        schedule: [
          {
            id: '5',
            time: '9:00 – 9:15',
            subject: 'Физическая культура',
          },
          { id: '6', time: '9:25 – 9:40', subject: 'Развитие речи' },
          {
            id: '7',
            time: '9:45 – 10:00',
            subject: 'Фронтальная игра с психологом',
          },
        ],
      },
      {
        day: 'Ср',
        schedule: [
          { id: '8', time: '9:00 – 9:15', subject: 'Музыка' },
          { id: '9', time: '9:20 – 9:35', subject: 'Математика' },
          { id: '10', time: '9:40 – 9:55', subject: 'Чтение' },
          { id: '11', time: '10:15 – 10:30', subject: 'Рисование' },
        ],
      },
      {
        day: 'Чт',
        schedule: [
          {
            id: '12',
            time: '9:00 – 9:15',
            subject: 'Физическая культура',
          },
          { id: '13', time: '9:20 – 9:35', subject: 'Английский язык' },
          {
            id: '14',
            time: '10:00 – 10:15',
            subject: 'Фронтальная игра с логопедом',
          },
        ],
      },
      {
        day: 'Пт',
        schedule: [
          { id: '15', time: '9:00 – 9:15', subject: 'Ритмика' },
          { id: '16', time: '9:20 – 9:35', subject: 'Рисование' },
          {
            id: '17',
            time: '9:45 – 10:00',
            subject: 'Физическая культура',
          },
        ],
      },
    ],
  },
  {
    groupName: 'Средняя группа 3-5 лет',
    scheduleData: [
      {
        day: 'Пн',
        schedule: [
          { id: '1', time: '9:00 – 9:20', subject: 'Окружающий мир' },
          { id: '2', time: '9:25 – 9:45', subject: 'Музыка' },
          {
            id: '3',
            time: '9:50 – 10:10',
            subject: 'Лепка / Аппликация',
          },
          { id: '4', time: '9:00 – 9:20', subject: 'Английский язык' },
        ],
      },
      {
        day: 'Вт',
        schedule: [
          { id: '5', time: '9:25 – 9:45', subject: 'Развитие речи' },
          {
            id: '6',
            time: '9:50 – 10:10',
            subject: 'Физическая культура',
          },
          { id: '7', time: '9:00 – 9:20', subject: 'Чтение' },
          { id: '8', time: '9:25 – 9:45', subject: 'Музыка' },
          { id: '9', time: '9:00 – 9:20', subject: 'Английский язык' },
        ],
      },
      {
        day: 'Ср',
        schedule: [
          { id: '10', time: '9:00 – 9:20', subject: 'Чтение' },
          { id: '11', time: '9:25 – 9:45', subject: 'Музыка' },
          { id: '12', time: '9:50 – 10:10', subject: 'Математика' },
          { id: '13', time: '10:15 – 10:35', subject: 'Рисование' },
        ],
      },
      {
        day: 'Чт',
        schedule: [
          { id: '14', time: '9:00 – 9:20', subject: 'Английский язык' },
          { id: '15', time: '9:25 – 9:45', subject: 'Физическая культура' },
          { id: '16', time: '9:50 – 10:10', subject: 'Математика' },
        ],
      },
      {
        day: 'Пт',
        schedule: [
          { id: '17', time: '9:00 – 9:20', subject: 'Музыка' },
          { id: '18', time: '9:25 – 9:45', subject: 'Конструирование' },
          { id: '19', time: '9:50 – 10:10', subject: 'Физическая культура' },
        ],
      },
    ],
  },
  {
    groupName: 'Старшая группа 5-7 лет',
    scheduleData: [
      {
        day: 'Пн',
        schedule: [
          { id: '1', time: '9:00 – 9:20', subject: 'Английский язык' },
          { id: '2', time: '9:25 – 9:45', subject: 'Окружающий мир' },
          { id: '3', time: '9:50 – 10:10', subject: 'Музыка' },
          {
            id: '4',
            time: '10:15 – 10:35',
            subject: 'Наблюдение психолога в период адаптации',
          },
        ],
      },
      {
        day: 'Вт',
        schedule: [
          { id: '5', time: '9:00 – 9:20', subject: 'Физическая культура' },
          { id: '6', time: '9:25 – 9:45', subject: 'Математика' },
          { id: '7', time: '9:50 – 10:10', subject: 'Чтение' },
          { id: '8', time: '10:15 – 10:35', subject: 'Рисование' },
        ],
      },
      {
        day: 'Ср',
        schedule: [
          { id: '9', time: '9:00 – 9:20', subject: 'Английский язык' },
          { id: '10', time: '9:25 – 9:45', subject: 'Музыка' },
          { id: '11', time: '9:50 – 10:10', subject: 'Математика' },
          { id: '12', time: '10:15 – 10:35', subject: 'Рисование' },
        ],
      },
      {
        day: 'Чт',
        schedule: [
          { id: '13', time: '9:00 – 9:20', subject: 'Английский язык' },
          { id: '14', time: '9:25 – 9:45', subject: 'Физическая культура' },
          { id: '15', time: '9:50 – 10:10', subject: 'Математика' },
        ],
      },
      {
        day: 'Пт',
        schedule: [
          { id: '16', time: '9:00 – 9:20', subject: 'Лепка / Аппликация' },
          { id: '17', time: '9:25 – 9:45', subject: 'Конструирование' },
          { id: '18', time: '9:50 – 10:10', subject: 'Хореография' },
          { id: '19', time: '10:15 – 10:35', subject: 'Рисование' },
        ],
      },
    ],
  },
];
