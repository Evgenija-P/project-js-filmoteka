const groupModalButton = document.querySelector(`.team-modal`);
const closeModalButton = document.querySelector(`.group-button`);
const backdrop = document.querySelector(`.backdrop`);

groupModalButton.addEventListener(`click`, onOpenModal);
closeModalButton.addEventListener(`click`, onCloseModal);

function onOpenModal() {
  backdrop.classList.remove(`is-hidden`);
}

function onCloseModal() {
  backdrop.classList.add(`is-hidden`);
}
