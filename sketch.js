function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(0);
  
  translate(width/2, height/2);
  fill(255);
  stroke(255, 255, 200);
  strokeWeight(10);
  //ellipse(x1(t), y1(t), 5);
//   for( var l = 0; l < 6; l++ ){
//   image(leaf[l], x1(t) + (l *  10), y1(t));
  
//   // ellipse(x2(t), y2(t), 5);
//   image(leaf[l], x2(t) + ( l * 10), y2(t));
//   }
  
  line(x1(t), y1(t), x2(t), y2(t));
  
  
  t++
}

function x1(t) {
  return cos(t / 30) * 100;

}

function y1(t) {
  return sin(t / 30) * 100;

}

function x2(t) {
  return sin(t / 50) * 100;
}

function y2(t) {
  return cos(t / 50) * 100;

}
