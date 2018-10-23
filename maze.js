var hitBoundary1;
var hitBoundary;

window.onload = function(){

  hitBoundary1 = document.getElementById("boundary1");
  hitBoundary = document.querySelectorAll(".boundary");
  

  for(var i=0; i<hitBoundary.length-1; i++){
   hitBoundary[i].onmouseover=iloss;
  }

 function iloss(){
  for(i=0; i<hitBoundary.length-1; i++){
     hitBoundary[i].className+=' youlose';
    }
  }
  
}

