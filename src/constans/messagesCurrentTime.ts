type MessagesType = {
  workHours: string;
  nightHours: string;
  lateHours: string;
};

export const messages: MessagesType = {
  workHours: 'Мы свяжемся с вами в наше рабочее время ПН-ПТ 7:00-19:00 Мск. Спасибо!',
  nightHours:
    'Сейчас ночь (00:00-06:00), мы свяжемся с вами в наше рабочее время ПН-ПТ 7:00-19:00 Мск. Спасибо!',
  lateHours:
    'Уже поздний час, мы свяжемся с вами в наше рабочее время ПН-ПТ 7:00-19:00 Мск. Спасибо!',
};
