class Snake {
    constructor() {
        this.position = { x: 200, y: 200 };
        this.direction = { x: 0, y: 0 };
        this.body = [{ x: 200, y: 200 }];
        this.growAmount = 0;
    }

    move() {
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;
        this.body.unshift({ x: this.position.x, y: this.position.y });

        if (this.growAmount === 0) {
            this.body.pop();
        } else {
            this.growAmount--;
        }
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
    }

    grow() {
        this.growAmount++;
    }
}


class Food {
    constructor() {
        this.position = { x: 100, y: 100 };
    }

    newPosition() {
        this.position.x = Math.floor(Math.random() * 20) * 20;
        this.position.y = Math.floor(Math.random() * 20) * 20;
    }
}

class Game {
    constructor() {
        this.score = 0;
        this.gameOver = false;
    }

    increaseScore() {
        this.score += 10;
    }

    setGameOver() {
        this.gameOver = true;
    }
}
