import React, { useEffect, useRef } from 'react';
import { createCanvas, drawBall } from './canvasUtils';
import "./Ball.module.css"
 
interface Props {
  width: number;
  height: number;
}

const BouncingBall: React.FC<Props> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;

    let ballX = width / 2;
    let ballY = height / 2;
    let ballRadius = 10;
    let up = 5;
    let down = -5;

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBall(ctx, ballX, ballY, ballRadius);

      if (ballX + up > canvas.width - ballRadius || ballX + up < ballRadius) {
        up = -up;
      }

      if (ballY + down > canvas.height - ballRadius || ballY + down < ballRadius) {
        down = -down;
      }

      ballX += up;
      ballY += down;

      requestAnimationFrame(gameLoop);
    };

    gameLoop();
  }, [canvasRef.current]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default BouncingBall;
