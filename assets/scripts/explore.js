// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const voiceSynth = window.speechSynthesis;
  const options = document.querySelector('select');

  const talkButton = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const imgSmile = document.getElementById('explore').querySelector('img');
  const voiceParent = document.getElementById('voice-select');
  const voiceChildren = Array.from(voiceParent);
  var voices; 
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


    talkButton.addEventListener('click',speakFunc);
    function speakFunc () {
      const utterPhrase = new SpeechSynthesisUtterance(textToSpeak.value);
      
      for (var i = 0; i < voices.length; i++) {
        if (voiceParent.value == voices[i].name) {
          utterPhrase.voice = voices[i];
   
        
      }
      
     
    }
    voiceSynth.speak(utterPhrase);
   
    imgSmile.src = '/assets/images/smiling-open.png';
    //console.log(utterPhrase);
    utterPhrase.addEventListener('end', (endVoice) => {
      imgSmile.src = '/assets/images/smiling.png';
    })
}

}
