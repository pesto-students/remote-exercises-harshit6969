import React, { useEffect, memo } from "react";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { KEY_CODES } from "../constants";

const GameController = ({
  snakeRef,
  gameStatus,
  setGameStatus,
  onRestartButtonPress,
}) => {
  useEffect(() => {
    document.onkeydown = handleKeyDown;
  });

  const onLeftButtonPress = () => {
    if (
      (snakeRef.current && snakeRef.current.direction === "RIGHT") ||
      gameStatus !== "playing"
    ) {
      return;
    }
    snakeRef.current.direction = "LEFT";
  };

  const onUpButtonPress = () => {
    if (
      (snakeRef.current && snakeRef.current.direction === "DOWN") ||
      gameStatus !== "playing"
    ) {
      return;
    }
    snakeRef.current.direction = "UP";
  };

  const onDownButtonPress = () => {
    if (
      (snakeRef.current && snakeRef.current.direction === "UP") ||
      gameStatus !== "playing"
    ) {
      return;
    }
    snakeRef.current.direction = "DOWN";
  };

  const onRightButtonPress = () => {
    if (
      (snakeRef.current && snakeRef.current.direction === "LEFT") ||
      gameStatus !== "playing"
    ) {
      return;
    }
    snakeRef.current.direction = "RIGHT";
  };

  const onSpaceButtonPress = () => {
    if (gameStatus === "playing") {
      setGameStatus("paused");
    } else if (gameStatus === "paused") {
      setGameStatus("playing");
    }
  };

  const onEnterButtonPress = () => {
    if (gameStatus === "not-started") {
      setGameStatus("playing");
    } else if (gameStatus === "finished") {
      onRestartButtonPress(snakeRef);
      setGameStatus("playing");
    }
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KEY_CODES.LEFT:
        onLeftButtonPress();
        break;
      case KEY_CODES.UP:
        onUpButtonPress();
        break;
      case KEY_CODES.RIGHT:
        onRightButtonPress();
        break;
      case KEY_CODES.DOWN:
        onDownButtonPress();
        break;
      case KEY_CODES.SPACE:
        onSpaceButtonPress();
        break;
      case KEY_CODES.ENTER:
        onEnterButtonPress();
        break;
      default:
    }
  };

  return (
    <>
      <div className="row text-center">
        <h4 className="col-12">Mouse/Mobile controls</h4>
        <div className="col">
          {gameStatus === "not-started" ? (
            <button
              className="btn btn-block btn-outline-warning"
              onClick={() => setGameStatus("playing")}
            >
              Start
            </button>
          ) : null}

          {gameStatus === "playing" ? (
            <button
              className="btn btn-block btn-outline-primary"
              onClick={() => setGameStatus("paused")}
            >
              Pause
            </button>
          ) : null}

          {gameStatus === "paused" ? (
            <button
              className="btn btn-block btn-outline-success"
              onClick={() => setGameStatus("playing")}
            >
              Resume
            </button>
          ) : null}
          {gameStatus === "finished" ? (
            <button
              className="btn btn-block btn-outline-primary"
              onClick={() => {
                onRestartButtonPress(snakeRef);
                setGameStatus("playing");
              }}
            >
              Restart
            </button>
          ) : null}
        </div>
        <div className="col">
          <FaArrowAltCircleLeft size={"3rem"} onClick={onLeftButtonPress} />
        </div>
        <div className="col">
          <FaArrowAltCircleUp size={"3rem"} onClick={onUpButtonPress} />
        </div>
        <div className="col">
          <FaArrowAltCircleDown size={"3rem"} onClick={onDownButtonPress} />
        </div>
        <div className="col">
          <FaArrowAltCircleRight size={"3rem"} onClick={onRightButtonPress} />
        </div>
      </div>
    </>
  );
};

export default memo(GameController);
