const startButton = document.querySelector('#start')
const endtButton = document.querySelector('#end')
const pauseButton = document.querySelector('#pause')
const videoSwitch = document.querySelector('#videoSwitch')
const audioSwitch = document.querySelector('#audioSwitch')

const capture = new Capture();
const config = new Config();

startButton.addEventListener('click', startHandler)
endtButton.addEventListener('click', endHandler)
pauseButton.addEventListener('click', pauseHandler)

videoSwitch.addEventListener('change', videoSwitchHandler)
audioSwitch.addEventListener('change', audioSwitchHandler)

// capture.status(); << 안쓸듯?
function startHandler () {
    console.log('startHandler')

    let recordConfig = {
        video: config.videoRecord,
        audio: config.audioRecord
    }
    capture.start( recordConfig );
    
}
function endHandler () {
    console.log('endHandler')
    capture.stop()
    
}

function pauseHandler () {
    console.log('pauseHandler')
}

function videoSwitchHandler () {
    config.videoRecord = videoSwitch.checked
    console.log('비디오 녹화?', config.videoRecord)
}

function audioSwitchHandler () {
    config.audioRecord = audioSwitch.checked
    console.log('오디오 녹화?', config.audioRecord)
}


