// explore.js - Priya Senthilkumar

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  //Retrieve our speech synthesis from current browser window
  const voiceSynth = window.speechSynthesis;

  //options select to map voices to drop down choices
  const options = document.querySelector('select');
  const talkButton = document.querySelector('button');
  //text to speak element used when retrieving voice
  const textToSpeak = document.getElementById('text-to-speak');
  const imgSmile = document.getElementById('explore').querySelector('img');
  const voiceParent = document.getElementById('voice-select');

  //load voices
  const voiceChildren = Array.from(voiceParent);
  let voices; 
  function voiceLoad () {
   
    voices = voiceSynth.getVoices();
    for (var i = 0; i < voices.length; i++) {
      const voiceOptions = document.createElement('option');
      
      voiceOptions.value = voices[i].name;
      voiceOptions.text = voices[i].name + " - (" + voices[i].lang +")"
      options.appendChild(voiceOptions);
      
    }
  }
  
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = voiceLoad;
    }


    //speak voices when user chooses the desired language
    talkButton.addEventListener('click',speakFunc);
    function speakFunc () {
      const utterPhrase = new SpeechSynthesisUtterance(textToSpeak.value);
      
      for (var i = 0; i < voices.length; i++) {
        if (voiceParent.value == voices[i].name) {
          utterPhrase.voice = voices[i];
   
        
      }
      
     
    }
    voiceSynth.speak(utterPhrase);
   
    //allow smiley face to move
    imgSmile.src = '/assets/images/smiling-open.png';
    //make sure to stop the picture image from moving
    utterPhrase.addEventListener('end', (endVoice) => {
    imgSmile.src = '/assets/images/smiling.png';
    })
}

}
