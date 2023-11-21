const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circle();
});

const ctx = canvas.getContext("2d")
    
// arc(x, y, radius, startAngle, endAngle)

function circle() {
    // head
    ctx.beginPath();
    ctx.arc(260, 260, 150, 0, Math.PI * 2, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
    
    // radius
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(260, 260, 150, 0, Math.PI * 2);
    ctx.stroke();

    // eye
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(205, 230, 30, 0, Math.PI * 2, true);
    ctx.fill();

    // eye
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(320, 230, 30, 0, Math.PI * 2, true);
    ctx.fill();

    // pupil
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(205, 230, 10, 0, Math.PI * 2, true);
    ctx.fill();
    
    // pupil
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(320, 230, 10, 0, Math.PI * 2, true);
    ctx.fill();

    // eye-radius
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(205, 230, 30, 0, Math.PI * 2, true);
    ctx.stroke();

    // eye-radius
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(320, 230, 30, 0, Math.PI * 2, true);
    ctx.stroke();

    // smile
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(260, 300, 50, 0, Math.PI);
    ctx.stroke();
}

circle();