import { ctx } from './canvas.js';
import { player } from './player.js';

export function drawHUD() {
  ctx.fillStyle = "white";
  ctx.font = "14px monospace";
  ctx.fillText("Score: " + Math.floor(player.score), 10, 20);
  ctx.fillText("Energy: " + Math.floor(player.energy), 10, 40);
  ctx.fillStyle = "#444";
  ctx.fillRect(10, 50, 100, 10);
  ctx.fillStyle = "#0f0";
  ctx.fillRect(10, 50, player.energy, 10);
}
