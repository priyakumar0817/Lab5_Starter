// expose.js
window.addEventListener('DOMContentLoaded', init)
function init() {

  console.log("hello");
 const hornParent = document.getElementById('horn-select');
  const hornChildren = Array.from(hornParent);
  const airHorn = hornChildren[1];
  console.log(hornParent);
  hornParent.addEventListener('click', printHornImg);


  const audioButton = document.querySelector('button');
  const volControl = document.querySelector("[type = 'range']");
  volControl.addEventListener('change',volCont);
  const aud  = document.querySelector('.hidden');
  
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
  audioButton.addEventListener('click',clickAudio);
  console.log(audioButton);
  function clickAudio() {
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

    if (hornParent.value == 'air-horn') {
      const airH = document.getElementById("expose").querySelector('img');
      airH.src = '/assets/images/air-horn.svg';
    } else if (hornParent.value == 'car-horn') {
      const carH = document.getElementById("expose").querySelector('img');
      carH.src = '/assets/images/car-horn.svg';
    } else if (hornParent.value == 'party-horn') {
      const airH = document.getElementById("expose").querySelector('img');
      airH.src = '/assets/images/party-horn.svg';
    }
  
  }
  
}