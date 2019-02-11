"use strict";
document.addEventListener("DOMContentLoaded", init);

let dest = document.querySelector("#typewriter");
let text = document.querySelector("#typewriter").textContent;
let counter = 0;

function init() {
  console.log("init");
  dest.textContent = "";
  loop();
}

function loop() {
  console.log("loop");

  if (text.length > counter) {
    counter++;
    let textLength = text.substring(0, counter);
    dest.textContent = textLength;
    setTimeout(loop, 400);
  }
}
