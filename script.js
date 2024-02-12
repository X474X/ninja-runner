const ground1 = document.querySelector(".ground1");
const ground2 = document.querySelector(".ground2");
const ninjaRun = document.querySelector(".ninja-run");
let i = 0;

ground1.style.left = 0;
ground2.style.right = "-848px";

setInterval(() => {
  ground1.style.left = parseInt(ground1.style.left) - 1 + "px";
  ground2.style.right = parseInt(ground2.style.right) + 1 + "px";

  if (parseInt(ground1.style.left) <= -848) {
    ground1.style.left = "849px";
  }
  if (parseInt(ground2.style.right) >= 848) {
    ground2.style.right = "-849px";
  }
}, 5);

setInterval(() => {
  ninjaRun.src = `./images/ninja/run/Run__00${i}.png`;
  i++;
  if (i > 9) {
    i = 0;
  }
}, 45);
