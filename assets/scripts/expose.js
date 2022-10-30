// expose.js - Priya Senthilkumar CSE 110
window.addEventListener('DOMContentLoaded', init)

function init() {

  //horn options
  const hornParent = document.getElementById('horn-select');
  hornParent.addEventListener('change', printHornImg);

  const audioButton = document.querySelector('button');
  const volControl = document.querySelector("[type = 'range']");
  volControl.addEventListener('change',volCont);
  const aud  = document.querySelector('.hidden');
  
  //volume slider changes
  function volCont (v) {
    aud.volume = v.target.value / 100;
    const volImg = document.getElementById("volume-controls").querySelector('img');
    if (aud.volume == 0) {
      volImg.src = '/assets/icons/volume-level-0.svg';
    }
    else if (aud.volume < .33) {
      volImg.src = '/assets/icons/volume-level-1.svg';
    } else if (aud.volume > .33 && aud.volume < .67) {
      volImg.src = '/assets/icons/volume-level-2.svg';
    } else {
      volImg.src = '/assets/icons/volume-level-3.svg';
    }
  }
  //button to play sound
  audioButton.addEventListener('click',clickAudio);

  function clickAudio() {
    //audio sounds change based on horn
    if (hornParent.value == 'air-horn') {
      aud.src = '/assets/audio/air-horn.mp3';
    }
    else if (hornParent.value == 'car-horn') {
      aud.src = '/assets/audio/car-horn.mp3';
    }
    else if (hornParent.value == 'party-horn') {
      aud.src = '/assets/audio/party-horn.mp3';
      const jSConfetti = new JSConfetti();
      jSConfetti.addConfetti();
    }
    aud.load();
    aud.play();

  }


  function printHornImg() {
    //change image based on the horn
    const hornPic = document.getElementById("expose").querySelector('img');
    if (hornParent.value == 'air-horn') {
      hornPic.src = '/assets/images/air-horn.svg';
    } else if (hornParent.value == 'car-horn') {
      hornPic.src = '/assets/images/car-horn.svg';
    } else if (hornParent.value == 'party-horn') {
      hornPic.src = '/assets/images/party-horn.svg';
    }
  
  }
  
}
