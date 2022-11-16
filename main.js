const trailer = document.getElementById("trailer");
const btn = document.getElementById("btn");

function triggerBtn() {
 if(trailer.paused) {
  trailer.play();
  btn.innerHTML = "PAUSE";
 } else{
  trailer.pause();
  btn.innerHTML = "PLAY";
 }
}