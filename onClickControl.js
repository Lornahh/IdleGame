var x = 0;
window.onload=function(){
  var mb = document.getElementById("firstButton");
  var currencyBox = document.getElementById("currencyBox");
  mb.addEventListener("click", handler);
  currencyBox.innerHTML="0";
}
function handler(){
  x+=1;
  currencyBox.innerHTML=x;
  // alert("You currently have "+x+" currency!");
}
