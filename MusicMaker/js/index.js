$(document).ready(function(){

var context = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = context.createOscillator();

oscillator.type = oscillator.SINE;

var gain = context.createGain();

gain.gain.value = 0.3;

oscillator.connect(gain);

gain.connect(context.destination);

var cNoteBtn = document.getElementById("cNote");

var notePlaying = false;

$('#cNote').click(function() {
    oscillator.frequency.value = 261.63;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#cSharpNote').click(function() {
    oscillator.frequency.value = 277.18;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dNote').click(function() {
    oscillator.frequency.value = 293.66;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dSharpNote').click(function() {
    oscillator.frequency.value = 311.13;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#eNote').click(function() {
    oscillator.frequency.value = 329.63;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fNote').click(function() {
    oscillator.frequency.value = 349.23;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fSharpNote').click(function() {
    oscillator.frequency.value = 369.99;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gNote').click(function() {
    oscillator.frequency.value = 392.00;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gSharpNote').click(function() {
    oscillator.frequency.value = 415.30;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#aNote').click(function() {
    oscillator.frequency.value = 440.00;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#aSharpNote').click(function() {
    oscillator.frequency.value = 466.16;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#bNote').click(function() {
    oscillator.frequency.value = 493.88;
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

});
