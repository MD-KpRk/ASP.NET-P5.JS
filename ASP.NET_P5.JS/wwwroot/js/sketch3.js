function setup() {
    createCanvas(600, 600);
    background(120);
    noFill();
    frameRate(24);
    drawFractal();
}

let lvl = 4;
let myscale = 1;


function draw() {
    background(120);
    myscale += 0.05;
    if (myscale >= 3.0) myscale = 1;
    drawFractal(myscale);
}

function drawFractal(sc) {
    drawRect(0, 0, width * sc, height * sc, lvl);
}

function drawRect(x, y, w, h, level) {
    let newW = w / 3;
    let newH = h / 3;

    let arrX = [x, x + newW, x + newW + newW];
    let arrY = [y, y + newH, y + newH + newH];
    for (let j = 0; j < 3; j++)
        for (let i = 0; i < 3; i++)
            if (j % 2 == 0 || i % 2 == 0) {
                rect(arrX[i], arrY[j], newW, newH);
                if (level > 0)
                    drawRect(arrX[i], arrY[j], newW, newH, level - 1);
            }

}