function playSound (e) {
  const audio = document.querySelector(`audio[data-keycode = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-keycode = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

function transitionEnded (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


keys.forEach(key => key.addEventListener('transitionend', transitionEnded));
window.addEventListener('keydown', playSound);