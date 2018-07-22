var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
}

function draw() {
    background('white');
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
    background('gray');
}
