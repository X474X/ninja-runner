import { gameElements } from "./gameElements.js";

const characterAnimation = () => {
  let i = 0;
  let y = 0;
  setInterval(() => {
    if (gameElements.pressSpace === true) {
      gameElements.ninjaRun.src = `./images/ninja/run/Run__00${i}.png`;
    }
    if (gameElements.pressSpace === false) {
      gameElements.ninjaRun.src = `./images/ninja/jump/Jump__00${i}.png`;
    }

    gameElements.zombieRun.src = `./images/zombie/walk/Walk${y}.png`;
    i++;
    y++;
    if (i > 9 && gameElements.pressSpace === true) {
      i = 0;
    } else if (i > 9) {
      i = 9;
    }
    if (y > 9) {
      y = 0;
    }
  }, 45);
};

const shurikenAnimation = (shuriken) => {
  let i = 0;
  const spin = setInterval(() => {
    shuriken.style.transform = `rotate(${i}deg)`;
    if (parseInt(shuriken.style.right) < -70) {
      clearInterval(spin);
    }
    i = i + 2;
  }, 0.1);
};

const barAnimation = () => {
  gameElements.loadingbar.style.width = "0%";
  for (let i = 1; i <= 100; i++) {
    setTimeout(() => {
      gameElements.loadingbar.style.width =
        parseInt(gameElements.loadingbar.style.width) + 1 + "%";
    }, i * 10);
  }

  setTimeout(() => {
    gameElements.shurikenCounter.innerHTML =
      parseInt(gameElements.shurikenCounter.innerHTML) + 1;
    gameElements.loadingbar.style.width = "0%";
    if (gameElements.shurikenCounter.innerHTML < 15) {
      barAnimation();
    } else {
      gameElements.loadingbar.style.width = "100%";
    }
  }, 1000);
};

export { characterAnimation, shurikenAnimation, barAnimation };
