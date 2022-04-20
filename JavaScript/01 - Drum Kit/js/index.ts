const removeTransition = (e: TransitionEvent) => {
  if (e.propertyName !== 'transform') {
    return;
  }
  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }
  e.target.classList.remove('playing');
};

const playSound = (e: KeyboardEvent) => {
  const audio = <HTMLAudioElement>document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = <HTMLElement>document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition as EventListener));
document.addEventListener('keydown', playSound);
