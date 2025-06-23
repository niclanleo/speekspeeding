import { scene } from './scene.js';

export let player = {
  x: 150,
  y: 480,
  targetY: 480,
  width: 20,
  height: 30,
  color: "#4444FF",
  speed: 3,
  state: "idle",
  retreatSpeed: 1,
  score: 10000,
  energy: 100,

  update(mouseDown) {
    if (Math.abs(this.y - this.targetY) > 1) {
      this.y += (this.y < this.targetY) ? this.speed : -this.speed;
    }
    if (mouseDown) {
      this.state = "running";
      if (this.x < 400) {
        this.x += 5;
      }
    } else {
      this.state = "resting";
      if (this.x > 150) {
        this.x -= this.retreatSpeed;
      }
    }
    if (this.y > scene.groundY - this.height) {
      this.y = scene.groundY - this.height;
    }
  },

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x - 4, this.y + this.height, 8, 8);
    ctx.fillRect(this.x + this.width - 4, this.y + this.height, 8, 8);
  }
};

export function updatePlayerEnergyAndScore(isTouchingWave) {
  if (isTouchingWave) {
    player.score += 10;
    player.energy += 1;
    if (player.energy > 100) player.energy = 100;
  } else {
    player.energy -= 0.3;
    if (player.energy < 0) player.energy = 0;
  }
}