var a=document.getElementsByClassName("a");
    b=document.getElementsByClassName("b");
    c=document.getElementsByClassName("c");
    d=document.getElementsByClassName("d");
    e=document.getElementsByClassName("e");
    f=document.getElementsByClassName("f");
    g=document.getElementsByClassName("g");


    function doClick() {
        var audio = new Audio(); 
        audio.src = 'note/do.mp3'; 
        audio.autoplay = true;
        
      }
      function reClick() {
        var audio = new Audio(); 
        audio.src = 'note/re.mp3'; 
        audio.autoplay = true;
      }
      function miClick() {
        var audio = new Audio(); 
        audio.src = 'note/mi.mp3'; 
        audio.autoplay = true;
      }
      function faClick() {
        var audio = new Audio(); 
        audio.src = 'note/fa.mp3'; 
        audio.autoplay = true;
      }
      function solClick() {
        var audio = new Audio(); 
        audio.src = 'note/sol.mp3'; 
        audio.autoplay = true;
      }
      function ljaClick() {
        var audio = new Audio(); 
        audio.src = 'note/lja.mp3'; 
        audio.autoplay = true;
      }
      function siClick() {
        var audio = new Audio(); 
        audio.src = 'note/si.mp3'; 
        audio.autoplay = true;
      }

      document.addEventListener("keyup" , function(e){
        if(e.code == 'Digit1'){
                var audio = new Audio(); 
                audio.src = 'note/do.mp3'; 
                audio.autoplay = true;
            }
       else if(e.code == 'Digit2') {
                var audio = new Audio(); 
                audio.src = 'note/re.mp3'; 
                audio.autoplay = true;
        }
        else if(e.code == 'Digit3') {
            var audio = new Audio(); 
            audio.src = 'note/mi.mp3'; 
            audio.autoplay = true;
        }
        else if(e.code == 'Digit4') {
            var audio = new Audio(); 
            audio.src = 'note/fa.mp3'; 
            audio.autoplay = true;
        }
        else if(e.code == 'Digit5') {
            var audio = new Audio(); 
            audio.src = 'note/sol.mp3'; 
            audio.autoplay = true;
        }
        else if(e.code == 'Digit6') {
            var audio = new Audio(); 
            audio.src = 'note/lja.mp3'; 
            audio.autoplay = true;
        }
        else if(e.code == 'Digit7') {
            var audio = new Audio(); 
            audio.src = 'note/si.mp3'; 
            audio.autoplay = true;
            a
        }
        else{return false}
        
        return false;
        
      })