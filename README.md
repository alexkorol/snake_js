# SnakeJS

SnakeJS is a classic web-based snake game implemented using JavaScript. It allows players to control a snake and navigate it through a grid, consuming food to grow longer while avoiding collisions with the boundaries and the snake's own body.

## Game Components

The SnakeJS project consists of the following core components:

### Model

- **Snake**: Represents the snake and its properties, such as position, direction, and body segments.
- **Food**: Represents the food and its properties, such as position.
- **Game**: Represents the game state and its properties, including the score and game over flag.

### View

- **drawSnake**: Renders the snake on the canvas.
- **drawFood**: Renders the food on the canvas.
- **updateScore**: Updates the score display.
- **showGameOver**: Displays the game over message.

### Controller

- **handleKeyDown**: Processes keyboard input and updates the snake's direction or triggers game actions.
- **update**: Updates the game state based on user input and game logic.
- **gameLoop**: The main game loop that calls the update and render functions at a fixed interval.

## File Structure

The SnakeJS project follows the following file structure:

- `index.html`: The main HTML file that defines the game canvas and includes the necessary JavaScript files.
- `model.js`: Contains the implementation of the core model classes: Snake, Food, and Game.
- `view.js`: Contains the view functions responsible for rendering the game elements on the canvas.
- `controller.js`: Contains the controller functions that handle user input and update the game state accordingly.
- `main.js`: The entry point of the application that initializes the game and sets up event listeners.

## Getting Started

To run the SnakeJS game locally, follow these steps:

1. Clone the SnakeJS repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Use the arrow keys to control the snake: up, down, left, and right.
4. Try to eat the food and grow longer without hitting the boundaries or colliding with the snake's body.
5. When the game ends, press any key to restart.

Feel free to customize the game by modifying the code or adding new features!


## Latest Updates

New functions and modifications:

- drawBorder(): Draws a black border around the game space
- drawRestartButton(): Draws a restart button on the canvas after a game over
- handleRestart(): Handles the restart button click event
- Modify showGameOver(): Add a call to drawRestartButton()
- Modify gameLoop(): Add a check for game restart
- Modify index.html: Change the page background to black

## Credits

The SnakeJS game is inspired by the classic snake game and is implemented using JavaScript and HTML canvas.

## License

This project is licensed under the [MIT License](LICENSE).