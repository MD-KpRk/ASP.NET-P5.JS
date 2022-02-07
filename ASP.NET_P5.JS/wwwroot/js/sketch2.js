let x = 0;
let y = 0;

function setup() {
    createCanvas(600, 600);
    textSize(24);
    background(120);
    strokeWeight(3);
    frameRate(60);

    slider = createSlider(1, 20, 10);
    slider.position(9, 75);

    colorPicker = createColorPicker('#000000');
    colorPicker.position(10, 40);

    button1 = createButton('Clear');
    button1.position(10, 10);
    button1.mousePressed(clearBackground);

}

function draw() {
    stroke(colorPicker.color());
    strokeWeight(slider.value());
    if (mouseIsPressed) {
        if (x != 0)
            line(x, y, mouseX, mouseY);
        x = mouseX;
        y = mouseY;
    }
    else
        x = y = 0;
    strokeWeight(0);
    fill(100);
    rect(0, 0, 150, 100);
}

function clearBackground() {
    background(120);
}