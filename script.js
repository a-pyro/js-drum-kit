'use strict';
console.log('Hello There');
// record
let recording = false;
// add memory
const playedKeys = [];
const rec = document.querySelector('#rec');
const play = document.querySelector('#play');

rec.addEventListener('click', function () {
    if (!recording) {
        recording = true;
        this.classList.add('recording');
    } else {
        recording = false;
        this.classList.remove('recording');
    }

    // console.log(recording);
});

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
