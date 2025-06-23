import { canvas, ctx } from './canvas.js';
import { player } from './player.js';
import { forecastedWaves } from './waveforecastengine.js';

export function drawMiniMap() {
  const mapX = canvas.width - 110;
  const mapY = 10;
  const mapWidth = 100;
  const mapHeight = 150;
  const scaleY = 0.1;

  ctx.fillStyle = "#111";
  ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

  forecastedWaves.forEach((pt, idx) => {
    const scaledY = mapY + mapHeight / 2 + (pt.y - player.y) * scaleY;
    ctx.fillStyle = "rgba(0,255,255,0.5)";
    ctx.fillRect(mapX + idx * 0.5, scaledY, 1, 1);
  });

  ctx.strokeStyle = "green";
  ctx.strokeRect(mapX, mapY + mapHeight / 2 - 30, mapWidth, 60);
}