'use strict';
console.log('Hello There');
// record
let recording = false;
// add memory
const playedKeys = [];
const rec = document.querySelector('#rec');
const play = document.querySelector('#play');
const canc = document.querySelector('#delete');

let i = -1;
const playSequence = () => {
    if (playedKeys.length) {
        i++;
        if (i === playedKeys.length) {
            i = -1;
            playedKeys.forEach(sound =>
                sound.removeEventListener('ended', playSequence)
            );
        }
        playedKeys[i].addEventListener('ended', playSequence);
        playedKeys[i].play();
    } else {
        console.log('nothing to play');
    }
};
// empty array if delete
canc.addEventListener('click', () => {
    playedKeys.length = 0;
    i = -1;
    console.log(playedKeys);
});

play.addEventListener('click', playSequence);

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

// play sound and record if

const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`section[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    // if recOn record
    if (recording) {
        playedKeys.push(audio);
        console.log(playedKeys);
    }
};

const keys = Array.from(document.querySelectorAll('.key'));

const removeTransion = e => {
    e.target.classList.remove('playing');
};

keys.forEach(key => key.addEventListener('transitionend', removeTransion));
window.addEventListener('keydown', playSound);
