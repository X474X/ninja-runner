import { groundMove, shurikenMove, zombieMove } from "./controls/move.js";
import { createShuriken } from "./controls/create.js";
import {
  barAnimation,
  characterAnimation,
  shurikenAnimation,
} from "./controls/animation.js";
import { gameElements } from "./controls/gameElements.js";

let press = true;
gameElements.heartsWrapper.style.visibility = "hidden";
gameElements.barWrapper.style.visibility = "hidden";
gameElements.zombieCounter.style.visibility = "hidden";
gameElements.shurikenCounter.style.visibility = "hidden";
gameElements.shurikenInfo.style.visibility = "hidden";

gameElements.startGame.addEventListener("click", () => {
  zombieMove();
  barAnimation();
  gameElements.shurikenInfo.style.visibility = "visible";
  gameElements.barWrapper.style.visibility = "visible";
  gameElements.zombieCounter.style.visibility = "visible";
  gameElements.heartsWrapper.style.visibility = "visible";
  gameElements.shurikenCounter.style.visibility = "visible";
  gameElements.startOverlay.style.display = "none";
});

window.addEventListener("keypress", (event) => {
  if (
    event.key === "q" &&
    press &&
    parseInt(gameElements.shurikenCounter.innerHTML) !== 0
  ) {
    press = false;
    const image = createShuriken();
    shurikenAnimation(image);
    shurikenMove(image);
    if (parseInt(gameElements.shurikenCounter.innerHTML) === 15) {
      barAnimation();
    }
    if (gameElements.shurikenCounter.innerHTML > 0) {
      gameElements.shurikenCounter.innerHTML =
        parseInt(gameElements.shurikenCounter.innerHTML) - 1;
    }
  }
  if (event.key === " ") {
    if (gameElements.pressSpace === true) {
      gameElements.pressSpace = false;
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          gameElements.ninjaRun.style.bottom =
            parseInt(gameElements.ninjaRun.style.bottom) + i + "px";
        }, i * 10);
      }
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            gameElements.ninjaRun.style.bottom =
              parseInt(gameElements.ninjaRun.style.bottom) - i + "px";
          }, i * 10);
        }
      }, 700);
      setTimeout(() => {
        gameElements.pressSpace = true;
      }, 900);
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    press = true;
  }
});

gameElements.retryGame.addEventListener("click", () => {
  gameElements.gameoverOverlay.style.display = "none";
  gameElements.shurikenInfo.style.display = "flex";
  gameElements.barWrapper.style.display = "flex";
  gameElements.zombieCounter.style.display = "flex";
  gameElements.zombieRun.style.visibility = "visible";
  gameElements.zombieKill.innerHTML = "0";
  gameElements.shurikenCounter.innerHTML = "0";
  zombieMove();
  for (let i = 0; i < 3; i++) {
    const image = document.createElement("img");
    image.src = "./images/heart.png";
    image.classList.add("hp");
    gameElements.hearts.push(image);
    gameElements.heartsWrapper.appendChild(image);
  }
  gameElements.touchNinja = false;
  if (
    gameElements.gameoverOverlay.querySelector("p").innerHTML === "YOU LOSE"
  ) {
    barAnimation();
  }
});

setInterval(() => {
  groundMove(1);
  groundMove(2);
}, 5);

characterAnimation();
