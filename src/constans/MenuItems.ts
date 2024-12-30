import { paths } from '../paths';

const {
  aboutPage,
  programPage,
  dailyDietPage,
  pricePage,
  reviewsPage,
  servicesPage,
  teamPage,
  scheduleGroupPage,
  documentsPage,
  dailyRoutinePage,
  galleryPage,
  contactsPage,
} = paths;

export const MenuItems: MenuItemsType = [
  [
    { patchName: aboutPage, text: 'О нас' },
    { patchName: programPage, text: 'Программа' },
    { patchName: dailyDietPage, text: 'Питание на 1 день' },
    { patchName: pricePage, text: 'Цены' },
    { patchName: reviewsPage, text: 'Отзывы' },
    { patchName: documentsPage, text: 'Документы' },
  ],
  [{ patchName: servicesPage, text: 'Занятия' }],
  [
    { patchName: scheduleGroupPage, text: 'Расписание групп' },
    {
      patchName: dailyRoutinePage,
      text: 'Режим дня на холодный период',
    },
  ],
  [{ patchName: galleryPage, text: 'Фото и видео' }],
  [{ patchName: teamPage, text: 'Наша команда' }],
  [{ patchName: contactsPage, text: 'Контакты' }],
];
