import { dailyRoutineType } from 'types/const/dailyRoutineType';

export const dailyRoutineData: dailyRoutineType[] = [
  {
    timePeriod: 'Дома',
    activities: [
      {
        id: '1',
        time: '06:30 (7:00) – 7:30',
        activity: 'Подъём, утренние гигиенические процедуры',
      },
    ],
  },
  {
    timePeriod: 'В ДС',
    activities: [
      {
        id: '2',
        time: '07:00 – 08:15',
        activity:
          'Прием детей на улице, утренний фильтр, индивидуальная работа, самостоятельная деятельность, общение с родителями',
      },
      {
        id: '3',
        time: '08:15 – 08:20',
        activity: 'Утренняя гимнастика',
      },
      {
        id: '4',
        time: '08:20 – 08:35',
        activity:
          'Самостоятельная деятельность, игры на развитие мелкой моторики',
      },
      {
        id: '5',
        time: '08:35 – 08:55',
        activity: 'Подготовка к завтраку, завтрак (гигиенические процедуры)',
      },
      {
        id: '6',
        time: '08:55 – 09:00',
        activity:
          'Свободная игровая деятельность, подготовка к совместной игровой деятельности',
      },
      {
        id: '7',
        time: '09:00 – 09:55',
        activity:
          'Совместная игровая деятельность: познавательное общение, предметно – практическая и исследовательская деятельность, совместная игровая деятельность со специалистами',
      },
      {
        id: '8',
        time: '09:55 – 10:25',
        activity: 'Второй завтрак (гигиенические процедуры)',
      },
      {
        id: '9',
        time: '10:25 – 12:05',
        activity: 'Подготовка к прогулке, прогулка (гигиенические процедуры)',
      },
      {
        id: '10',
        time: '12:05 – 12:20',
        activity: 'Возвращение с прогулки',
      },
      {
        id: '11',
        time: '12:20 – 12:50',
        activity: 'Подготовка к обеду, обед (гигиенические процедуры)',
      },
      {
        id: '12',
        time: '12:50 – 15:00',
        activity: 'Подготовка ко сну, дневной сон',
      },
      {
        id: '13',
        time: '15:00 – 15:30',
        activity: 'Подъем, водные, воздушные процедуры, гимнастика после сна',
      },
      {
        id: '14',
        time: '15:30 – 15:45',
        activity: 'Подготовка к полднику, полдник (гигиенические процедуры)',
      },
      {
        id: '15',
        time: '15:45 – 16:15',
        activity: 'Игры на развитие мелкой моторики',
      },
      {
        id: '16',
        time: '16:15 – 17:15',
        activity:
          'Чтение книг, рассказов, познавательное общение, развивающие игры',
      },
      {
        id: '17',
        time: '17:15 – 17:45',
        activity: 'Подготовка к ужину, ужин (гигиенические процедуры)',
      },
      {
        id: '18',
        time: '17:45 – 19:00',
        activity:
          'Подготовка к прогулке, прогулка. Уход домой, общение с родителями',
      },
    ],
  },
  {
    timePeriod: 'Дома',
    activities: [
      {
        id: '19',
        time: '19:00 – 19:50',
        activity: 'Спокойные игры, семейное чтение',
      },
      {
        id: '20',
        time: '19:50 – 20:40',
        activity: 'Легкий второй ужин, вечерние гигиенические процедуры',
      },
      {
        id: '21',
        time: '20:40 (21:00) – 6:30 (7:00)',
        activity: 'Укладывание, ночной сон',
      },
    ],
  },
];
