const gameElements = {
  ninjaRun: document.querySelector(".ninja-run"),
  zombieRun: document.querySelector(".zombie-run"),
  ground1: document.querySelector(".ground1"),
  ground2: document.querySelector(".ground2"),
  gameWrapper: document.querySelector(".game-wrapper"),
  shurikenCounter: document.querySelector(".shuriken-counter"),
  loadingbar: document.querySelector(".loading-bar"),
  hearts: Array.prototype.slice.call(document.querySelectorAll(".hp")),
  heartsWrapper: document.querySelector(".hearts"),
  pressSpace: true,
  touchNinja: false,
  gameoverOverlay: document.querySelector(".game-over"),
  retryGame: document.querySelector(".retry-button"),
  shurikenInfo: document.querySelector(".shuriken-info"),
  barWrapper: document.querySelector(".bar-wrapper"),
  zombieHit: 0,
  zombieKill: document.querySelector(".zombie-kill"),
  zombieCounter: document.querySelector(".zombie-counter"),
  startOverlay: document.querySelector(".start-game"),
  startGame: document.querySelector(".press-start"),
};

gameElements.ninjaRun.style.right = "610px";
gameElements.ninjaRun.style.bottom = "110px";

gameElements.zombieRun.style.right = "-120px";
gameElements.zombieRun.style.bottom = "110px";

gameElements.ground1.style.left = 0;
gameElements.ground2.style.right = "-848px";

gameElements.loadingbar.style.width = "0%";

export { gameElements };
