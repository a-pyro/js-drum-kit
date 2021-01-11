'use strict';
console.log('Hello There');
const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`section[data-key="${e.keyCode}"]`);
    console.log(key);
    audio.play();
};

window.addEventListener('keydown', playSound);
