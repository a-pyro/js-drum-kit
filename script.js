'use strict';
console.log('Hello There');
const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`section[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

const keys = Array.from(document.querySelectorAll('.key'));

const removeTransion = e => {
    e.target.classList.remove('playing');
};

keys.forEach(key => key.addEventListener('transitionend', removeTransion));
window.addEventListener('keydown', playSound);
