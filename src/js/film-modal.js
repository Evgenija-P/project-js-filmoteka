const { modalWindow, buttonModalClose } = {
  modalWindow: document.querySelector('[data-modal]'),
  buttonModalClose: document.querySelector('[button-modal-close]'),
};

buttonModalClose.addEventListener('click', onButtonModalCloseClick);

function onButtonModalCloseClick() {
  modalWindow.classList.add('is-hidden');
}
