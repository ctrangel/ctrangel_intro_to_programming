

function playAudio(audioPath, startTime) {
    var audio = new Audio(audioPath);
    audio.currentTime = startTime;
    audio.volume = 0.2;
    audio.play();

  }
  
 
  
   
  