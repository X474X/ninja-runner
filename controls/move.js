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
  }, 15);
};

export { groundMove, shurikenMove };
