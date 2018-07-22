var canvas;
var angle = 0;
var radius;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    background('white');
    noStroke();
}

function draw() {
    background('white');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    background('white');

    radius = window.innerWidth / 3;
    var r = canvas.width / 10;

    push();
    translate(canvas.width / 2, canvas.height / 2);

    for(var i = 0; i < 12; i++) {
        fill('hsla(' + (360 / 12 * i) + ', 80%, 80%, 0.8)');
        var x = sin(radians(angle + (360 / 12 * i))) * radius;
        var y = cos(radians(angle + (360 / 12 * i))) * radius;
        ellipse(x, y, r, r);
    }

    pop();

    angle += 0.2;
}
