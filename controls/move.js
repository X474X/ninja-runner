import { gameElements } from "./gameElements.js";

const groundMove = (ground) => {
  if (ground === 1) {
    gameElements.ground1.style.left =
      parseInt(gameElements.ground1.style.left) - 1 + "px";
    if (parseInt(gameElements.ground1.style.left) <= -848) {
      gameElements.ground1.style.left = "849px";
    }
  } else {
    gameElements.ground2.style.right =
      parseInt(gameElements.ground2.style.right) + 1 + "px";

    if (parseInt(gameElements.ground2.style.right) >= 848) {
      gameElements.ground2.style.right = "-849px";
    }
  }
};

const shurikenMove = (image) => {
  const moveLoop = setInterval(() => {
    image.style.right = parseInt(image.style.right) - 10 + "px";
    if (parseInt(image.style.right) < -70) {
      clearInterval(moveLoop);
      gameElements.gameWrapper.removeChild(image);
    }
    if (
      parseInt(image.style.right) -
        parseInt(gameElements.zombieRun.style.right) <=
        20 &&
      parseInt(gameElements.zombieRun.style.right) < 600
    ) {
      clearInterval(moveLoop);
      gameElements.gameWrapper.removeChild(image);
      gameElements.zombieHit++;
      if (gameElements.zombieHit === 3) {
        gameElements.zombieKill.innerHTML =
          parseInt(gameElements.zombieKill.innerHTML) + 1;
        if (parseInt(gameElements.zombieKill.innerHTML) === 10) {
          gameElements.gameoverOverlay.style.display = "flex";
          gameElements.shurikenInfo.style.display = "none";
          gameElements.barWrapper.style.display = "none";
          gameElements.zombieCounter.style.display = "none";
          gameElements.gameoverOverlay.querySelector("p").innerHTML = "YOU WIN";
          while (gameElements.heartsWrapper.firstChild) {
            gameElements.heartsWrapper.removeChild(
              gameElements.heartsWrapper.firstChild
            );
          }
          gameElements.hearts = [];
          gameElements.zombieRun.style.right = "-420px";
          gameElements.zombieHit = 0;
        } else {
          gameElements.zombieRun.style.right = "-420px";
          gameElements.zombieHit = 0;
        }
      }
    }
  }, 15);
};

const zombieMove = () => {
  if (gameElements.hearts.length !== 0) {
    const move = setInterval(() => {
      if (gameElements.hearts.length !== 0) {
        gameElements.zombieRun.style.right =
          parseInt(gameElements.zombieRun.style.right) + 1 + "px";
      }
      if (parseInt(gameElements.zombieRun.style.right) > 850) {
        setTimeout(() => {
          gameElements.zombieRun.style.right = "-120px";
          if (gameElements.hearts.length === 0) {
            clearInterval(move);
          }
          gameElements.touchNinja = false;
        }, 1000);
      }
      if (
        parseInt(gameElements.zombieRun.style.right) > 560 &&
        parseInt(gameElements.zombieRun.style.right) < 670 &&
        parseInt(gameElements.ninjaRun.style.bottom) < 200 &&
        parseInt(gameElements.ninjaRun.style.bottom) >= 110 &&
        !gameElements.touchNinja
      ) {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            gameElements.ninjaRun.style.filter = "invert(100)";
            setTimeout(() => {
              gameElements.ninjaRun.style.filter = "invert(0)";
            }, i * 50);
          }, i * 100);
        }
        gameElements.touchNinja = true;
        if (gameElements.hearts.length !== 0) {
          gameElements.heartsWrapper.removeChild(
            gameElements.hearts[gameElements.hearts.length - 1]
          );
        }
        gameElements.hearts.pop();
        if (gameElements.hearts.length === 0) {
          gameElements.gameoverOverlay.style.display = "flex";
          gameElements.zombieRun.style.right = "-420px";
          gameElements.shurikenInfo.style.display = "none";
          gameElements.barWrapper.style.display = "none";
          gameElements.zombieCounter.style.display = "none";
          gameElements.zombieHit = 0;
          gameElements.gameoverOverlay.querySelector("p").innerHTML =
            "YOU LOSE";
        }
      }
    }, 2);
  }
};

export { groundMove, shurikenMove, zombieMove };

console.log(gameElements.gameoverOverlay.querySelector("p"));
