const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

function drawSnake(snake) {
    ctx.fillStyle = 'green';
    snake.body.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 20, 20);
    });
}

function drawFood(food) {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.position.x, food.position.y, 20, 20);
}

function updateScore(score) {
    scoreElement.textContent = `Score: ${score}`;
}

function showGameOver() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Game Over', 140, 200);
}
