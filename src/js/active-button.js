const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('active');
  refs.queueBtn.classList.remove('active');
}

function onQueueBtnClick() {
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');
}
