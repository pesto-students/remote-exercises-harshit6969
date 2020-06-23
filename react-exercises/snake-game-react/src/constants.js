
const DEFAULT_BOARD_SIZE = {
    row: 30,
    column: 50,
  };
  
  const DEFAULT_BLOCK_SIZE = 15;
  
  const DEFAULT_SNAKE_DATA = {
    body: [
      [4, 7],
      [4, 6],
      [4, 5],
    ],
    color: 'red',
    speed: 160,
    direction: 'DOWN',
  };
  
  const DEFAULT_GAME_STATUS = 'not-started'; // possible modes: not-started, playing, paused, and finished
  const KEY_CODES = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
  };
  export {
    DEFAULT_BOARD_SIZE,
    DEFAULT_GAME_STATUS,
    DEFAULT_SNAKE_DATA,
    DEFAULT_BLOCK_SIZE,
    KEY_CODES
  };
  