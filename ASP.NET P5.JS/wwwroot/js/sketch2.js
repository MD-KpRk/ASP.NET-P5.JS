var x = 0;
var y = 0;
let mode = 'NONE';

function setup() {
    createCanvas(600, 600);
    textSize(24);
    background(100);

    button1 = createButton('Clear');
    button1.position(10, 10);
    button1.mousePressed(clearBackground);

    button2 = createButton('Brush');
    button2.position(10, 40);
    button2.mousePressed(setModeBrush);

    button2 = createButton('Rectangle');
    button2.position(10, 70);
    button2.mousePressed(setModeRect);
}

function draw() {

    switch (mode) {
        case 'Brush':
            if (mouseIsPressed) {
                if (x != 0)
                    line(x, y, mouseX, mouseY);
                x = mouseX;
                y = mouseY;
            } else
                x = y = 0;
            break;

        case 'Rectangle':
            if (mouseIsPressed) {
                if (x == 0) {
                    x = mouseX;
                    y = mouseY;
                    noStroke();
                    circle(x, y, 1);
                    stroke(255);
                }

            }
            else {
                if (x != 0 || y != 0) {
                    rect(x, y, mouseX - x, mouseY -y);
                    x = y = 0;
                }
            }

            break;


    }
}

function setModeBrush() {
    x = y = 0
    mode = 'Brush';
    stroke(1);
    strokeWeight(3);
}

function setModeRect() {
    x = y = 0
    mode = 'Rectangle';
    stroke(256);
}

function clearBackground() {
    background(100);
}