
        function playSound(e){
            
            //use attribute selector to select data-key from audio element (es6)
            
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
             
            const key =  document.querySelector(`.key[data-key="${e.keyCode}"]`);
            
            //stop function from running keys that are not selected
            
             if (!audio) return;
            
             //rewind audio duration to the start everytime a key is hit
            
             audio.currentTime = 0;
             
             audio.play();
            
             //same thing as key.addClass in Jquery
             //'playing' is one of the style.css selectors
           
            
             key.classList.add('playing');
         
         }
 
         function removeTransition(e){
            
            //skip if it's not a transform
            
             if(e.propertyName !== 'transform') return;
             
             this.classList.remove('playing');
         }
        
         const keys = document.querySelectorAll('.key');
        
         keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        
          //listen to keycodes
         
          window.addEventListener('keydown',playSound );