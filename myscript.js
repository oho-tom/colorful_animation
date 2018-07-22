var canvas;
var angle = 0;
var radius;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
}

function draw() {
    background('white');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background('white');

    radius = window.innerWidth / 3;

    push();
    translate(canvas.width / 2, canvas.height / 2);

    fill('pink');
    noStroke();
    var r = canvas.width / 10;
    var x = sin(radians(angle)) * radius;
    var y = cos(radians(angle)) * radius;
    ellipse(x, y, r, r);

    pop();

    angle++;
}
