var font;
var vehicles = [];

function preload() {
  font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(600, 400);
  background(51);
  // textFont(font);
  // textSize(140);
  // fill(255);
  // noStroke();
  // text("Cihat", 100, 200);

  var points = font.textToPoints("Cihat", 100, 200, 142);
  // console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
