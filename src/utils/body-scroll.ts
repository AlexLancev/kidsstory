export const bodyScroll = {
  lock(): void {
    document.body.classList.add('lock');
  },
  unLock(): void {
    document.body.classList.remove('lock');
  },
  toggle(): void {
    document.body.classList.toggle('lock');
  },
};
