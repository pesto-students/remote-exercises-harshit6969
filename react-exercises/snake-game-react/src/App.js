import logo from "./logo.svg";
import "./App.css";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Controller from './components/Controller';

import GameBoard from './components/Board';
import { useGameLoop } from './game-utility/use-game-loop.hook';
import {
  drawSnake,
  moveSnake,
  getSnakeHead,
  growSnake,
  isSnakeDead,
  getNextSnakeHeadPosition,
  updateSnakeSpeed,
} from './game-utility/snake';
import {
  drawFood,
  getRandomFoodPosition,
  isFoodEaten,
  removeOldFood,
} from './game-utility/food';
import {
  DEFAULT_BOARD_SIZE,
  DEFAULT_GAME_STATUS,
  DEFAULT_SNAKE_DATA,
  DEFAULT_BLOCK_SIZE
} from './constants';
function HomePage() {
  const [boardSize] = useState({ ...DEFAULT_BOARD_SIZE });
  const [boardBlockSize] = useState(DEFAULT_BLOCK_SIZE);
  const [scoreBoard, setScoreBoard] = useState({ score: 0, highScore: 0 });

  // possible modes: not-started, playing, paused, and finished
  const [gameStatus, setGameStatus] = useState(DEFAULT_GAME_STATUS);
  const snakeRef = useRef({ ...DEFAULT_SNAKE_DATA });
  const foodPositionRef = useRef(null);
  const gameBoardRef = useRef(null);
  const lastSnakeMoveTimeRef = useRef(0);

  const updateScore = useCallback(() => {
    setScoreBoard((state) => {
      const newScore = state.score + 1;
      if (newScore > state.highScore) {
        return { score: newScore, highScore: newScore };
      }
      return { ...state, score: newScore };
    });
  }, []);

  const updateData = useCallback(() => {
    if (isSnakeDead(snakeRef, boardSize)) {
      setGameStatus('finished');
      return;
    }

    moveSnake(getNextSnakeHeadPosition(snakeRef), snakeRef);

    if (
      isFoodEaten(getSnakeHead(snakeRef.current.body), foodPositionRef.current)
    ) {
      growSnake(snakeRef.current.body);
      removeOldFood(gameBoardRef.current);
      foodPositionRef.current = getRandomFoodPosition(boardSize);
      updateScore();
      updateSnakeSpeed(snakeRef);
    }
  }, [boardSize, updateScore]);

  const drawData = useCallback(() => {
    drawSnake(gameBoardRef.current, [snakeRef.current]);
    drawFood(gameBoardRef.current, foodPositionRef.current);
  }, []);

  // runs every 16.67ms
  const update = useCallback(
    (currentTime) => {
      const secondsSinceLastSnakeMove =
        currentTime - lastSnakeMoveTimeRef.current;
      if (secondsSinceLastSnakeMove > snakeRef.current.speed) {
        lastSnakeMoveTimeRef.current = currentTime;
        if (gameStatus === 'playing') {
          updateData();
        }
      }
      drawData();
    },
    [updateData, drawData, gameStatus]
  );

  const onRestartButtonPress = (snakeRef) => {
    snakeRef.current = { ...DEFAULT_SNAKE_DATA };
    setScoreBoard((state) => ({ ...state, score: 0 }));
  };

  useEffect(() => {
    foodPositionRef.current = getRandomFoodPosition(boardSize);
  }, [boardSize]);

  useGameLoop(update);

  return (
    <div className="container">
      <h1 className="text-center" data-testid="1">Snake Game</h1>
      <div className="row text-center">
        <div className="col">Score: {scoreBoard.score}</div>
        <div className="col">High Score: {scoreBoard.highScore}</div>
      </div>
      <GameBoard
        boardSize={boardSize}
        boardBlockSize={boardBlockSize}
        ref={gameBoardRef}/>

      <Controller
        snakeRef={snakeRef}
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
        onRestartButtonPress={onRestartButtonPress}
      />
      <ol type="1" className="text-muted">
        <li>Use <b>Enter</b> key to Start / Restart</li>
        <li>Use <b>Space</b> key to Pause / Resume</li>
        <li>Use <b>Arrow</b> keys to control snake</li>
      </ol>
    </div>
  );
}
export default HomePage;
