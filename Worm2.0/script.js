const container = document.querySelector('.container');
const snake = document.querySelector('.snake');

let x = Math.floor(Math.random() * 20) * 20;
let y = Math.floor(Math.random() * 20) * 20;
let dx = 20;
let dy = 0;

snake.style.left = `${x}px`;
snake.style.top = `${y}px`;

function moveSnake() {
  x += dx;
  y += dy;

  if (x < 0 || x > container.clientWidth - snake.clientWidth ||
      y < 0 || y > container.clientHeight - snake.clientHeight) {
    clearInterval(intervalId);
    alert('Game over!');
  }

  snake.style.left = `${x}px`;
  snake.style.top = `${y}px`;
}

let intervalId = setInterval(moveSnake, 100);

function changeDirection(event) {
  if (event.key === 'ArrowUp' && dy === 0) {
    dx = 0;
    dy = -20;
  } else if (event.key === 'ArrowDown' && dy === 0) {
    dx = 0;
    dy = 20;
  } else if (event.key === 'ArrowLeft' && dx === 0) {
    dx = -20;
    dy = 0;
  } else if (event.key === 'ArrowRight' && dx === 0) {
    dx = 20;
    dy = 0;
  }
}

document.addEventListener('keydown', changeDirection);

join () {
    // loop through each position except the last one
    for (let i = 1; i < this.positions.length - 1; i++) {
      // get last and current position
      const last = this.positions[i - 