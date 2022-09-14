const groupModalButton = document.querySelector(`.team-modal`);
const closeModalButton = document.querySelector(`.group-button`);
const backdrop = document.querySelector(`.backdrop`);
const body = document.querySelector('body');

groupModalButton.addEventListener(`click`, onOpenModal);
closeModalButton.addEventListener(`click`, onCloseModal);
backdrop.addEventListener(`click`, onClickBackdrop);

function onOpenModal() {
  scrollOff();
  backdrop.classList.remove(`is-hidden`);
  window.addEventListener('keydown', escClose);
}

function onCloseModal() {
  scrollOn();
  backdrop.classList.add(`is-hidden`);
  window.removeEventListener('keydown', escClose);
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function escClose(e) {
  if (e.code === `Escape`) {
    onCloseModal();
  }
}

function scrollOff() {
  body.classList.add('disable-scroll');
}

function scrollOn() {
  body.classList.remove('disable-scroll');
}
