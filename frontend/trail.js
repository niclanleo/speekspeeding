import { ctx } from './canvas.js';
import { player } from './player.js';

let trail = [];
export function updateTrail() {
  if (trail.length > 100) trail.shift();
  trail.push({ x: player.x, y: player.y });
}
export function drawTrail() {
  if (trail.length < 4) return;
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);
  for (let i = 1; i < trail.length - 2; i++) {
    const xc = (trail[i].x + trail[i + 1].x) / 2;
    const yc = (trail[i].y + trail[i + 1].y) / 2;
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
  }
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 1;
  ctx.stroke();
}