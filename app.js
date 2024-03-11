import { groundMove, shurikenMove, zombieMove } from "./controls/move.js";
import { createShuriken } from "./controls/create.js";
import { characterAnimation, shurikenAnimation } from "./controls/animation.js";
import { gameElements } from "./controls/gameElements.js";

let press = true;

window.addEventListener("keypress", (event) => {
  if (event.key === "q" && press) {
    press = false;
    const image = createShuriken();
    shurikenAnimation(image);
    shurikenMove(image);
    if (gameElements.shurikenCounter.innerHTML > 0) {
      gameElements.shurikenCounter.innerHTML =
        parseInt(gameElements.shurikenCounter.innerHTML) - 1;
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    press = true;
  }
});

setInterval(() => {
  groundMove(1);
  groundMove(2);
}, 5);

characterAnimation();
zombieMove();
