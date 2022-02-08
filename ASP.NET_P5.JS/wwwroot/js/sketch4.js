let d = 60;
let balls = [];

function setup() {
    createCanvas(600, 600);
    background(120);
}

function draw() {
    background(120);
    for (let i = 0; i < balls.length; i++) {
        balls[i].moveBall();
        balls[i].drawBall();
        balls[i].checkBorder();
    }

    if (lock) {
        line(xs, ys, mouseX, mouseY);
        circle(xs, ys, d);
    }

}

let xs = 0, ys = 0;
let lock = false;

function mousePressed() {
    lock = true;
    xs = mouseX;
    ys = mouseY;


}

function mouseReleased() {
    lock = false;
    balls.push(new Ball(xs, ys, createVector((mouseX - xs) / 20, (mouseY - ys) / 20)));
}

class Ball {
    constructor(x, y, vec, col) {
        this.posV = createVector(x, y);
        this.speedV = vec;
        this.gravV = createVector(0, 0.2);
        this.radius = d;
        this.static = false;

        this.color = col;

    }

    drawBall() {
        circle(this.posV.x, this.posV.y, this.radius);
    }

    moveBall() {
        if (this.static == false) {
            this.speedV.div(1.02);
            let moveV = this.speedV.add(this.gravV);
            this.posV.add(moveV);
        }
    }

    checkBorder() {
        if (this.posV.y > height - d / 2) {
            if (this.static == false) {
                this.speedV.y *= -1;
                this.speedV.sub(this.gravV);
                if (abs(this.speedV.y) < 1.75 && abs(this.speedV.x) < 2) {
                    this.static = true;
                }
            }
        }
        else if (this.posV.y < 0 + d / 2)
            this.speedV.y *= -1;
        else if (this.posV.x > width - d / 2 || this.posV.x < 0 + d / 2)
            this.speedV.x *= -1;
    }
}