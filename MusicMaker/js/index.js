$(document).ready(function(){

var context = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = context.createOscillator();

oscillator.type = oscillator.SINE;

var gain = context.createGain();

gain.gain.value = 0.3;

oscillator.connect(gain);

gain.connect(context.destination);

var cNoteBtn = document.getElementById("cNote");

var frequencies = [
    [27.5, 29.14, 30.87, 32.70, 34.65, 36.71, 38.90, 41.20, 43.70, 46.25, 49.00, 51.91],
    [55.00, 58.27, 61.74, 65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.83],
    [110, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65],
    [220.00, 233.08, 246.94, 261.63, 277.18, 293.67, 311.13, 329.63, 349.23, 370.00, 392.00, 415.31],
    [440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61],
    [880.00, 932.33, 987.77, 1046.50, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22],
    [1760.00, 1864.66, 1975.53, 2093.00, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44],
];



var notePlaying = false;

$('#aNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][0];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#aSharpNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][1];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#bNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][2];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#cNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][3];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#cSharpNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][4];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][5];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dSharpNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][6];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#eNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][7];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][8];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fSharpNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][9];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][10];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gSharpNote').click(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][11];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#stopButton').click(function() {
    oscillator.frequency.value = 0;
    notePlaying = false;
});

});
