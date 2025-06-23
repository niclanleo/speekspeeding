let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let player = {
    x: 100,
    y: 300,
    speed: 2,
    targetY: 300,
    chips: 10000,
    score: 0
};

// 滑鼠事件

let isMouseDown = false;
canvas.addEventListener("mousedown", function (e) {
    isMouseDown = true;
    player.targetY = e.clientY;
    console.log("Mouse down at", e.clientY);
});
canvas.addEventListener("mouseup", function () {
    isMouseDown = false;
});
canvas.addEventListener("mousemove", function (e) {
    if (isMouseDown) {
        player.targetY = e.clientY;
        console.log("Moving", e.clientY);
    }
});

// 觸控事件（手機用）
canvas.addEventListener("touchmove", function (e) {
    let touch = e.touches[0];
    player.targetY = touch.clientY;
});

function update() {
    if (player.y < player.targetY) player.y += player.speed;
    if (player.y > player.targetY) player.y -= player.speed;

    player.score += 1;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = "#0f0";
    ctx.fillRect(player.x - 10, player.y - 10, 20, 20);

    // Draw score
    ctx.fillStyle = "#fff";
    ctx.font = "16px sans-serif";
    ctx.fillText("Score: " + player.score, 10, 20);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
