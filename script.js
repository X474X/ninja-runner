import { groundMove, shurikenMove } from "./controls/move.js";
import { gameElements } from "./controls/gameElements.js";

let i = 0;
let press = true;

setInterval(() => {
  groundMove(1);
  groundMove(2);
}, 5);

setInterval(() => {
  gameElements.ninjaRun.src = `./images/ninja/run/Run__00${i}.png`;
  i++;
  if (i > 9) {
    i = 0;
  }
}, 45);

window.addEventListener("keypress", (event) => {
  if (event.key === "q" && press) {
    press = false;
    const image = document.createElement("img");
    image.src = "./images/shuriken.png";
    image.classList.add("shuriken");
    image.style.bottom =
      parseInt(gameElements.ninjaRun.style.bottom) + 40 + "px";
    image.style.right = parseInt(gameElements.ninjaRun.style.right) - 20 + "px";
    gameElements.gameWrapper.appendChild(image);
    shurikenMove(image);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    press = true;
  }
});
