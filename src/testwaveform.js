

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

wavesurfer.load('../Default Audio/Wilhelm.mp3');