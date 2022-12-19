let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

class Ball{
    constructor(x, y){
        this.r = 30;
        this.x = x || randomIntFromInterval(0+this.r, window.innerWidth - this.r);
        this.y = y || randomIntFromInterval(0+this.r, window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.draw();
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = "red";
        c.fill();
    }

    update(){
        if(this.x + this.r > window.innerWidth || this.x - this.r < 0){
            this.vx = -this.vx;
        }
        if(this.y + this.r > window.innerHeight || this.y - this.r < 0){
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}

function animation(){
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    balls.forEach((ball)=>{
        ball.update();
    })
    requestAnimationFrame(animation);
}

window.addEventListener("click", (e)=>{
    balls.push(new Ball(e.clientX, e.clientY));
})

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let balls = [];
for(let i = 0; i < 5; i++){
    balls.push(new Ball);
}

animation();