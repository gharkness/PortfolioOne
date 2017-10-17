$(document).ready(function(){

var context = new (window.AudioContext || window.webkitAudioContext)();

var tuna = new Tuna(context);

var oscillator = context.createOscillator();

oscillator.type = oscillator.SINE;

var gain = context.createGain();

var notePlaying = false;

var chorus = new tuna.Chorus({
    rate: 1.5,         //0.01 to 8+
    feedback: 0.2,     //0 to 1+
    delay: 0.0045,     //0 to 1
    bypass: 0          //the value 1 starts the effect as bypassed, 0 or 1
});

var moog = new tuna.MoogFilter({
    cutoff: 0.065,    //0 to 1
    resonance: 3.5,   //0 to 4
    bufferSize: 4096  //256 to 16384
});

var tremolo = new tuna.Tremolo({
    intensity: 0.3,    //0 to 1
    rate: 4,         //0.001 to 8
    stereoPhase: 0,    //0 to 180
    bypass: 0
});

var phaser = new tuna.Phaser({
    rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
    depth: 0.3,                    //0 to 1
    feedback: 0.2,                 //0 to 1+
    stereoPhase: 30,               //0 to 180
    baseModulationFrequency: 700,  //500 to 1500
    bypass: 0
});

var delay = new tuna.Delay({
    feedback: 0.45,    //0 to 1+
    delayTime: 150,    //1 to 10000 milliseconds
    wetLevel: 0.25,    //0 to 1+
    dryLevel: 1,       //0 to 1+
    cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
    bypass: 0
});

var input = context.createGain();
var output = context.createGain();

gain.gain.value = 0.3;

oscillator.connect(input);

input.connect(moog);
moog.connect(chorus);
chorus.connect(phaser);
phaser.connect(tremolo);
tremolo.connect(delay);
delay.connect(output);
output.connect(context.destination);

//gain.connect(context.destination);

//gain.connect(chorus);

//chorus.connect(context.destination);

var curOctave = 3;

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

$('#aNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][0];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#aNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#aSharpNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][1];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#aSharpNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#bNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][2];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#bNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#cNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][3];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#cNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#cSharpNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][4];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#cSharpNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#dNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][5];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#dSharpNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][6];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#dSharpNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#eNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][7];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#eNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#fNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][8];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#fSharpNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][9];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#fSharpNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#gNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][10];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$('#gSharpNote').mousedown(function() {
    oscillator.frequency.value = frequencies[$("#octaveSelector").val()][11];
    if (!notePlaying) {
        oscillator.start(0);
        notePlaying = true;
    }
});

$('#gSharpNote').mouseup(function() {
    oscillator.frequency.value = 0;
});

$(document).keypress(function(e) {
    switch(e.which) {
        case 113:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][0];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 50:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][1];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 119:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][2];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 101:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][3];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 52:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][4];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 114:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][5];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 53:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][6];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 116:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][7];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 121:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][8];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 55:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][9];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 117:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][10];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 56:
            oscillator.frequency.value = frequencies[$("#octaveSelector").val()][11];
            if (!notePlaying) {
                oscillator.start(0);
                notePlaying = true;
            }
            break;
        case 61:
            octaveUp();
            break;
        case 45:
            octaveDown();
            break;
    }
});

$('#typeSelector').change(function() {
    var type = $('#typeSelector option:selected').text();
    if (type === 'Sine') {
        oscillator.type = oscillator.SINE;
    } else if (type === 'Sawtooth') {
        oscillator.type = oscillator.SAWTOOTH;
    } else if (type === 'Triangle') {
        oscillator.type = oscillator.TRIANGLE;
    } else if (type === 'Square') {
        oscillator.type = oscillator.SQUARE;
    }
});

//
//  Chorus Controls
//
$('#chorusRateRange').change(function() {
    var rateValue = $('#chorusRateRange').val();
    chorus.rate = rateValue;
});

$('#chorusFeedbackRange').change(function() {
    var fbackValue = $('#chorusFeedbackRange').val();
    chorus.feedback = fbackValue;
});

$('#chorusDelayRange').change(function() {
    var delayValue = $('#chorusDelayRange').val();
    chorus.delay = delayValue;
});

$('#chorusBypassBtn').click(function() {
    if (chorus.bypass == 0) {
        chorus.bypass = 1;
    } else if (chorus.bypass == 1) {
        chorus.bypass = 0;
    }
});

//
//  Moog Controls
//
$('#moogCutoffRange').change(function() {
    var cutoffValue = $('#moogCutoffRange').val();
    moog.cutoff = cutoffValue;
});

$('#moogResonanceRange').change(function() {
    var resonanceValue = $('#moogResonanceRange').val();
    moog.resonance = resonanceValue;
});

$('#moogBypassBtn').click(function() {
    if (moog.bypass == 0) {
        moog.bypass = 1;
    } else if (moog.bypass == 1) {
        moog.bypass = 0;
    }
});

//
//  Phaser Controls
//
$('#phaserRateRange').change(function() {
    phaser.rate = $('#phaserRateRange').val();
});

$('#phaserDepthRange').change(function() {
    phaser.depth = $('#phaserDepthRange').val();
});

$('#phaserFeedbackRange').change(function() {
    phaser.feedback = $('#phaserFeedbackRange').val();
});

$('#phaserStereoPhaseRange').change(function() {
    phaser.stereoPhase = $('#phaserStereoPhaseRange').val();
});

$('#phaserBaseModulationFrequencyRange').change(function() {
    phaser.baseModulationFrequency = $('#phaserBaseModulationFrequencyRange').val();
});

$('#phaserBypassBtn').click(function() {
    if (phaser.bypass == 0) {
        phaser.bypass = 1;
    } else if (phaser.bypass == 1) {
        phaser.bypass = 0;
    }
});

//
//  Tremolo Controls
//
$('#tremoloIntensityRange').change(function() {
    tremolo.intensity = $('#tremoloIntensityRange').val();
});

$('#tremoloRateRange').change(function() {
    tremolo.rate = $('#tremoloRateRange').val();
});

$('#tremoloStereoPhaseRange').change(function() {
    tremolo.stereoPhase = $('#tremoloStereoPhaseRange').val();
});

$('#tremoloBypassBtn').click(function() {
    if (tremolo.bypass == 0) {
        tremolo.bypass = 1;
    } else if (tremolo.bypass == 1) {
        tremolo.bypass = 0;
    }
});

//
//  Delay Controls
//
$('#delayFeedbackRange').change(function() {
    delay.feedback = $('#delayFeedbackRange').val();
});

$('#delayTimeRange').change(function() {
    delay.delayTime = $('#delayTimeRange').val();
});

$('#delayWetLevelRange').change(function() {
    delay.wetLevel = $('#delayWetLevelRange').val();
});

$('#delayDryLevelRange').change(function() {
    delay.dryLevel = $('#delayDryLevelRange').val();
});

$('#delayCutoffRange').change(function() {
    delay.cutoff = $('#delayCutoffRange').val();
});

$('#delayBypassBtn').click(function() {
    if (delay.bypass == 0) {
        delay.bypass = 1;
    } else if (delay.bypass == 1) {
        delay.bypass = 0;
    }
})

function octaveUp() {
    if (curOctave < 6) {
        $('#octaveSelector').val(curOctave + 1).change();
        curOctave += 1;
    }
}

function octaveDown() {
    if (curOctave >= 1) {
        $('#octaveSelector').val(curOctave - 1).change();
        curOctave -= 1;
    }
}

$(document).keyup(function() {
    oscillator.frequency.value = 0;
});

});
