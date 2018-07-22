var canvas;
var angle = 0;

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

    var radius_animation = window.innerWidth / 3;
    var radius_circle = canvas.width / 10;

    push();
    // 描画の原点をキャンバスの中心に設定
    translate(canvas.width / 2, canvas.height / 2);

    for(var i = 0; i < 12; i++) {
        fill('hsla(' + (360 / 12 * i) + ', 80%, 80%, 0.4)');
        var x = sin(radians(angle + (360 / 12 * i))) * radius_animation;
        var y = cos(radians(angle + (360 / 12 * i))) * radius_animation;
        ellipse(x, y, radius_circle, radius_circle);
    }

    pop();

    angle -= 0.2;
}
