// Sam Goldberg
// 11/14/26
// Week 5 Animal Hunting Game 

//Creates a MIDI sound that starts and stops after you initiate the function that activates the beep
// import {
//     leftNumeric
// } from '../App.jsx'

export const playBeep = () => {
    const audioCTx = new(window.AudioContext || window.wbkitAudioContext)();
    const gameOscillator = audioCTx.createOscillator();
    const gainNode = audioCTx.createGain();

    gameOscillator.type = 'triangle';
    gameOscillator.frequency.setValueAtTime(500, audioCTx.currentTime); //set frequcency of beep at 100 at the current time
    gainNode.gain.setValueAtTime(0.3, audioCTx.currentTime) //set the volume to 0.3 at the current time
    gameOscillator.connect(audioCTx.destination);
    gameOscillator.start();
    gameOscillator.stop(audioCTx.currentTime + 0.14) //this determines the beep length
    // if (leftNumeric >= 70) {

    // } else {
    //     gameOscillator.stop(audioCTx.currentTime + 0.45) //this determines the beep length
    // }

}