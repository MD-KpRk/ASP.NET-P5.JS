let bgcolor = 120;

function setup() {
    createCanvas(600, 600);
    background(bgcolor);
}

let x = 500, y1 = 0, y2 = 600;

function draw() {
    background(bgcolor);
    stroke(0);
    line(x, y1, x, y2);

    let newY = mouseY;
    let centerY = height / 2;
    strokeWeight(3);
    line(0, centerY, x, newY);

    strokeWeight(1);
    stroke(255);
    line(x, newY, 0, newY - (centerY - newY));

}
