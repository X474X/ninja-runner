import { gameElements } from "./gameElements.js";

const createShuriken = () => {
  const image = document.createElement("img");
  image.src = "./images/shuriken.png";
  image.classList.add("shuriken");
  image.style.bottom = parseInt(gameElements.ninjaRun.style.bottom) + 40 + "px";
  image.style.right = parseInt(gameElements.ninjaRun.style.right) - 20 + "px";
  gameElements.gameWrapper.appendChild(image);
  return image;
};

export { createShuriken };
