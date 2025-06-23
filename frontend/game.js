import { canvas, ctx } from './canvas.js';
import { player, updatePlayerEnergyAndScore } from './player.js';
import { scene } from './scene.js';
import { updateForecastWave, drawForecastWave, forecastedWaves } from './waveforecastengine.js';
import { updateTrail, drawTrail } from './trail.js';
import { drawMiniMap } from './semanticmaphud.js';
import { drawHUD } from './hud.js';

let mouseDown = false;
canvas.addEventListener("mousedown", (e) => {
  mouseDown = true;
  player.targetY = e.clientY;
});
canvas.addEventListener("mouseup", () => { mouseDown = false; });
canvas.addEventListener("mousemove", (e) => {
  if (mouseDown) player.targetY = e.clientY;
});
canvas.addEventListener("touchstart", () => { mouseDown = true; });
canvas.addEventListener("touchend", () => { mouseDown = false; });
canvas.addEventListener("touchmove", (e) => {
  let touch = e.touches[0];
  player.targetY = touch.clientY;
});

function update() {
  player.update(mouseDown);
  scene.update();
  updateForecastWave();
  updateTrail();

  const isTouchingWave = forecastedWaves.some(w =>
    Math.abs(w.x - player.x) < 10 && Math.abs(w.y - player.y) < 10
  );
  updatePlayerEnergyAndScore(isTouchingWave);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  scene.draw(ctx);
  drawForecastWave();
  drawTrail();
  player.draw(ctx);
  drawMiniMap();
  drawHUD();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
