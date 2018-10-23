var start;
var end;
var begin;
var hitBoundary;

window.onload = function(){

  start = document.getElementById("start");
  end = document.getElementById("end");
  begin  = false;
  hitBoundary = document.querySelectorAll(".boundary");
  

  start.onmouseover = function(){
    begin = true;
    reset();
    
    for(var i=0; i<hitBoundary.length-1; i++){
      hitBoundary[i].onmouseover=iloss;
    }
  }

  end.onmouseover = function(){
    if(begin) won();
  }
 


 function won(){
   alert("You won!");
   begin = false;
 }


 function iloss(){
  for(i=0; i<hitBoundary.length-1; i++){
     hitBoundary[i].className+=' youlose';
    }
   console.log('Sorry Try agiain');
   begin = false;
  }
 
 function reset(){
    //reset walls
    for (var i=0; i<hitBoundary.length-1; i++){
      if(hitBoundary[i].className =' youlose'){
        hitBoundary[i].className = "boundary";
      }
      
    }
 } 
}

