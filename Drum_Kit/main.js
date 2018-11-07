function playSong(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // para a função por nao ter audio correspondente
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}
function removeTransitioin(e) {
  if (e.propertyName !== 'transform') return; // para a execução se nao for um transform
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSong);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransitioin));
