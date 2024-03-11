import { gameElements } from "./gameElements.js";

const characterAnimation = () => {
  let i = 0;
  setInterval(() => {
    gameElements.ninjaRun.src = `./images/ninja/run/Run__00${i}.png`;
    gameElements.zombieRun.src = `./images/zombie/walk/Walk${i}.png`;
    i++;
    if (i > 9) {
      i = 0;
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

export { characterAnimation, shurikenAnimation };
