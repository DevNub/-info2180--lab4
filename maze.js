var hitBoundary1;
var hitBoundary;

window.onload = function(){ //Ready State

  hitBoundary1 = document.getElementById("boundary1");
  hitBoundary = document.getElementsByClassName("boundary");
  
  hitBoundary1.onmouseover = function() {loss}
  hitBoundary[0].onmouseover = function() {iloss(0)}
  hitBoundary[1].onmouseover = function() {iloss(1)}
  hitBoundary[2].onmouseover = function() {iloss(2)}
  hitBoundary[3].onmouseover = function() {iloss(3)}
  hitBoundary[4].onmouseover = function() {iloss(4)}
  
   function loss(){
    hitBoundary1.className +=' youlose';
  }

  function iloss(index){
    hitBoundary[index].className+=' youlose';
  }

}
