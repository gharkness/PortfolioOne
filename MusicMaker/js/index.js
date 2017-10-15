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
    oscillator.start(0);
});

});
