const random = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomColor = (min, max) =>
  `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`;

const boxes = document.querySelectorAll(".box");

console.log(boxes, "boxes");

function move(_boxes) {
  for (let box of _boxes) {
    box.style.left = `${random(0, 1000)}px`;
    box.style.top = `${random(0, 1000)}px`;
    box.style.backgroundColor = randomColor(0, 155);
    box.style.transform = `scale(${random(1, 2)})`;
  }
}

setInterval(move.bind(null, boxes), 1000);
