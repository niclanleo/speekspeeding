import { canvas } from './canvas.js';

export const scene = {
  groundY: 510,
  scrollX: 0,
  speed: 5, // ← 保持原始語速節奏，與角色奔跑一致

  draw(ctx) {
    // 黑色背景（夜宮）
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 紅地毯（權力軸線）
    ctx.fillStyle = "#a00";
    ctx.fillRect(0 - this.scrollX % canvas.width, this.groundY, canvas.width * 2, 70);

    // 柱子（秩序節點）
    ctx.fillStyle = "#333";
    for (let x = -this.scrollX % 120; x < canvas.width; x += 120) {
      ctx.fillRect(x + 40, 100, 20, 400);
    }
  },

  update() {
    this.scrollX += this.speed; // 持續等速捲動
  }
};
