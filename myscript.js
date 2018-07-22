var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
}

function draw() {
    background('white');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background('white');

    fill('pink');
    noStroke();
    ellipse(canvas.width / 2, canvas.height / 2, 10, 10);
}
