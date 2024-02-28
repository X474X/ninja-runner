const gameElements = {
  ninjaRun: document.querySelector(".ninja-run"),
  ground1: document.querySelector(".ground1"),
  ground2: document.querySelector(".ground2"),
  gameWrapper: document.querySelector(".game-wrapper"),
  shurikenCounter: document.querySelector(".shuriken-counter"),
};

gameElements.ninjaRun.style.right = "610px";
gameElements.ninjaRun.style.bottom = "110px";

gameElements.ground1.style.left = 0;
gameElements.ground2.style.right = "-848px";

export { gameElements };
