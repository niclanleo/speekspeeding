import { canvas, ctx } from './canvas.js';
import { scene } from './scene.js';

export let forecastedWaves = [];
export function updateForecastWave() {
  if (forecastedWaves.length > 150) forecastedWaves.shift();
  let nextX = canvas.width + forecastedWaves.length;
  let y = 480 + Math.sin(scene.scrollX * 0.02 + forecastedWaves.length * 0.1) * 50;
  forecastedWaves.push({ x: nextX - scene.scrollX, y });
}
export function drawForecastWave() {
  ctx.beginPath();
  ctx.moveTo(forecastedWaves[0]?.x || 0, forecastedWaves[0]?.y || 480);
  for (let i = 1; i < forecastedWaves.length; i++) {
    ctx.lineTo(forecastedWaves[i].x, forecastedWaves[i].y);
  }
  ctx.strokeStyle = "rgba(0,255,255,0.4)";
  ctx.lineWidth = 2;
  ctx.stroke();
}