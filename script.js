function onClickKnock()
{
    let audio = document.getElementById("audioKnock");
    audio.currentTime = 0;
    audio.play();
}

function onClickFrog()
{
    let audio = document.getElementById("audioFrog");
    audio.currentTime = 0;
    audio.play();
}

function onClickDoor()
{
    let audio = document.getElementById("audioDoor");
    audio.currentTime = 0;
    audio.play();
}

function onClickRain()
{
    let audio = document.getElementById("audioRain");
    audio.volume = 0.7;
    audio.currentTime = 0;
    audio.play();
}

function onClickRainStop()
{
    let audio = document.getElementById("audioRain");
    audio.pause();
    audio.currentTime = 0;
}

function onClickThunder()
{
    let audio = document.getElementById("audioThunder");
    audio.volume = 1;
    audio.currentTime = 0;
    audio.play();
}

function onClickApplause()
{
    let audio = document.getElementById("audioApplause");
    audio.currentTime = 0;
    audio.play();
}

function onClickDrumroll()
{
    let audio = document.getElementById("audioDrumroll");
    audio.currentTime = 0;
    audio.play();
}

function onClickDrumend()
{
    let roll = document.getElementById("audioDrumroll");
    roll.pause();
    roll.currentTime = 0;
    let audio = document.getElementById("audioDrumend");
    audio.currentTime = 0;
    audio.play();
}

function onClickSpotlight()
{
    let audio = document.getElementById("audioSpotlight");
    audio.currentTime = 0;
    audio.play();
}

function onClickBirds()
{
    let audio = document.getElementById("audioBirds");
    audio.currentTime = 0;
    audio.play();
}

function onClickBirdsStop()
{
    let audio = document.getElementById("audioBirds");
    audio.pause();
    audio.currentTime = 0;
}

function onClickSolong()
{
    let audio = document.getElementById("audioSolong");
    audio.currentTime = 0;
    audio.play();
}

function onClickSolongStop()
{
    let audio = document.getElementById("audioSolong");
    audio.pause();
    audio.currentTime = 0;
}

function onClickEngine()
{
    let audio = document.getElementById("audioEngine");
    audio.currentTime = 0;
    audio.play();
}

function onClickEngineStop()
{
    let audio = document.getElementById('audioEngine');
    audio.pause();
    audio.currentTime = 0;
}

function onClickDown()
{
    let audio = document.getElementById('audioDown');
    audio.currentTime = 0;
    audio.play();
}

function onClickSpeed()
{
    let audio = document.getElementById('audioSpeed');
    audio.currentTime = 0;
    audio.play();
}

function onClickSpeedStop()
{
    let audio = document.getElementById('audioSpeed');
    audio.pause();
    audio.currentTime = 0;
}
