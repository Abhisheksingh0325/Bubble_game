function bubble() {
  let clutter = "";

  for (let i = 0; i <= 94; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
    document.querySelector(".panelbottem").innerHTML = clutter;
  }
}

let timer = 60;
let timer_count = "";
function timers() {
  timer_count = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer_val").innerHTML = timer;
    } else {
      clearInterval(timer_count);
      document.querySelector(
        ".panelbottem"
      ).innerHTML = `<h1 style="color: rgb(230, 96, 96);">GAME OVER</h1>`;
    }
  }, 1000);
}
let hit = "";

function Hit_count() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#Hit_val").innerHTML = hit;
}

let Start_score = 0;
function Score_count() {
  document.getElementById("Score").innerHTML = Start_score += 10;
}

document
  .querySelector(".panelbottem")
  .addEventListener("click", function (dets) {
    if (hit === Number(dets.target.textContent)) {
      Score_count();
      Hit_count();
      bubble();
    } else {
      document.querySelector("#Hit_val").innerHTML = "";
      clearInterval(timer_count);
      document.querySelector("#timer_val").innerHTML = "0";
      document.querySelector(
        ".panelbottem"
      ).innerHTML = `<h3 style="color: rgb(88, 158, 88);">PRESS WRONG KEY</h3>
      <h1 style="color: rgb(230, 96, 96);">GAME OVER</h1>`;
    }
  });

Hit_count();
timers();
bubble();
