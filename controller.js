function handleKeyDown(event, snake, game) {
    const key = event.key;

    if (key === 'ArrowUp' && snake.direction.y === 0) {
        snake.changeDirection({ x: 0, y: -20 });
    } else if (key === 'ArrowDown' && snake.direction.y === 0) {
        snake.changeDirection({ x: 0, y: 20 });
    } else if (key === 'ArrowLeft' && snake.direction.x === 0) {
        snake.changeDirection({ x: -20, y: 0 });
    } else if (key === 'ArrowRight' && snake.direction.x === 0) {
        snake.changeDirection({ x: 20, y: 0 });
    }
}

function update(snake, food, game) {
    snake.move();

    if (snake.position.x === food.position.x && snake.position.y === food.position.y) {
        snake.grow(); // Make the snake grow longer
        food.newPosition();
        game.increaseScore();
    }

    if (snake.position.x < 0 || snake.position.x >= 400 || snake.position.y < 0 || snake.position.y >= 400) {
        game.setGameOver();
    }

    for (let i = 1; i < snake.body.length; i++) {
        if (snake.position.x === snake.body[i].x && snake.position.y === snake.body[i].y) {
            game.setGameOver();
        }
    }
}

function gameLoop(snake, food, game) {
    if (game.gameOver) {
        showGameOver();
        canvas.addEventListener('click', (event) => handleRestart(event, snake, food, game));
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBorder();
    drawSnake(snake);
    drawFood(food);
    updateScore(game.score);

    update(snake, food, game);

    setTimeout(() => gameLoop(snake, food, game), 100);
}

function handleRestart(event, snake, food, game) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 160 && x <= 240 && y >= 250 && y <= 280) {
        snake.reset();
        food.newPosition();
        game.reset();
        gameLoop(snake, food, game);
    }
}
