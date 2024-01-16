const worm = [];
for (let i = 0; i < 3; i++) {
  worm.push({ x: i * 20, y: 0 });
}

function drawWorm() {
    for (let i = 0; i < worm.length; i++) {
      const segment = worm[i];
      const wormElement = document.querySelector(`.worm:nth-child(${i + 1})`);
      wormElement.style.left = `${segment.x}px`;
      wormElement.style.top = `${segment.y}px`;
    }
  }

  function moveWorm() {
    const head = worm[0];
    const newHead = { x: head.x, y: head.y };
  
    switch (direction) {
      case "up":
        newHead.y -= 20;
        break;
      case "down":
        newHead.y += 20;
        break;
      case "left":
        newHead.x -= 20;
        break;
      case "right":
        newHead.x += 20;
        break;
    }
  
    worm.unshift(newHead);
    worm.pop();
  }

  function randomDirection() {
    const directions = ["up", "down", "left", "right"];
    return directions[Math.floor(Math.random() * directions.length)];
  }

  function animateWorm() {
    moveWorm();
    drawWorm();
    setTimeout(animateWorm, 100);
  }


  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "ArrowUp" || key === "w") {
      direction = "up";
    } else if (key === "ArrowDown" || key === "s") {
      direction = "down";
    } else if (key === "ArrowLeft" || key === "a") {
      direction = "left";
    } else if (key === "ArrowRight" || key === "d") {
      direction = "right";
    }
  });

  let direction = randomDirection();
animateWorm();