var hr;
var mn;
var sc;

var hr_angle, mn_angle, sc_angle;

function setup() {
  createCanvas(400,450);
  //createSprite(0, 0, 50, 50);
}

function draw() {
  background("#364F6B"); 
  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES);

  hr_angle = map(hr%12,0,12,0,360);
  mn_angle = map(mn,0,60,0,360);
  sc_angle = map(sc,0,60,0,360);
  
  translate(200,200)
  rotate(-90)

  //for second
  push();
  noFill();
  strokeWeight(9);
  stroke("#3FC1C9");
  arc(0,0,300,300,0,sc_angle);
  rotate(sc_angle);
  line(0,0,100,0);
  pop();

  //for minute
  push();
  noFill();
  strokeWeight(9);
  stroke("#FCE48A");
  arc(0,0,280,280,0,mn_angle);
  rotate(mn_angle);
  line(0,0,75,0);
  pop();

  //for second
  push();
  noFill();
  strokeWeight(9);
  stroke("#FC5285");
  arc(0,0,260,260,0,hr_angle);
  rotate(hr_angle);
  line(0,0,75,0);
  pop();

  drawSprites();
  //console.log(hr)
  console.log(sc_angle);
  //console.log(sc)
}