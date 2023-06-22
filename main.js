const snake = new Snake();
const food = new Food();
const game = new Game();

document.addEventListener('keydown', (event) => handleKeyDown(event, snake, game));
gameLoop(snake, food, game);
