$(document).ready(function(){

var context = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = context.createOscillator();

oscillator.type = oscillator.SINE;

var gain = context.createGain();

gain.gain.value = 0.3;

oscillator.connect(gain);

gain.connect(context.destination);

var cNoteBtn = document.getElementById("cNote");

$('#cNote').click(function() {
    oscillator.frequency.value = 261.63;
    oscillator.start(0);
});

$('#cSharpNote').click(function() {
    oscillator.frequency.value = 277.18;
    oscillator.start(0);
});

$('#dNote').click(function() {
    oscillator.frequency.value = 293.66;
    oscillator.start(0);
});

$('#dSharpNote').click(function() {
    oscillator.frequency.value = 311.13;
    oscillator.start(0);
});

$('#eNote').click(function() {
    oscillator.frequency.value = 329.63;
    oscillator.start(0);
});

$('#fNote').click(function() {
    oscillator.frequency.value = 349.23;
    oscillator.start(0);
});

$('#fSharpNote').click(function() {
    oscillator.frequency.value = 369.99;
    oscillator.start(0);
});

$('#gNote').click(function() {
    oscillator.frequency.value = 392.00;
    oscillator.start(0);
});

$('#gSharpNote').click(function() {
    oscillator.frequency.value = 415.30;
    oscillator.start(0);
});

$('#aNote').click(function() {
    oscillator.frequency.value = 440.00;
    oscillator.start(0);
});

$('#aSharpNote').click(function() {
    oscillator.frequency.value = 466.16;
    oscillator.start(0);
});

$('#bNote').click(function() {
    oscillator.frequency.value = 493.88;
    oscillator.start(0);
});

});
