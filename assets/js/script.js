/* JavaScript code on modal window and close mostly taken from W3 Schools page on modal windows */
let modal = document.getElementById("instructions-modal");
let btn = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}