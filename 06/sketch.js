
//declaracion e iniciacion de variables
var mx = 0.0;
var red = 0;
var green=  0;
var blue=0;

function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
}

function draw() {
    //arbolito 1
  green=map(mx,0,399,147,247);
  background(215, green, 255);
  stroke(255);
  
  translate(0, 100, 0);
  push();
  translate(0, 25, 0);
  red=map(mx,0,399,187,240);
  green=map(mx,0,399,146,240);
  blue=map(mx,0,399,81,240);
  rotateX(PI/2);
  fill(red, green, blue);
  plane(width*2, height);
  pop();
  //arbolito 1
  push();
  translate(-125,25,0);
  push();
  rotateZ(PI);
  fill(91, 0, 0);
  translate(0, 20, 0);
  cylinder(5, 30);
  translate(0, 25, 0);
  //cambio de estaciones metodo y mapeado
  red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
  red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
 red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  pop();
  pop();
  //arbolito 2
    push();
  translate(-200,25,-50);
  push();
  rotateZ(PI);
  fill(91, 0, 0);
  translate(0, 20, 0);
  cylinder(5, 30);
  translate(0, 25, 0);
  red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
 red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  pop();
  pop();
   //arbolito 3
  push();
  translate(125,25,0);
  push();
  rotateZ(PI);
  fill(91, 0, 0);
  translate(0, 20, 0);
  cylinder(5, 30);
  translate(0, 25, 0);
 red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  pop();
  pop();
  //arbolito 4
    push();
  translate(200,25,-50);
  push();
  rotateZ(PI);
  fill(91, 0, 0);
  translate(0, 20, 0);
  cylinder(5, 30);
  translate(0, 25, 0);
red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
 red=map(mx,0,399,151,230);
  green=map(mx,0,399,32,230);
  blue=map(mx,0,399,19,230);
  fill(red, green, blue);
  cone(25, 50);
  translate(0, 25, 0);
red=map(mx,0,399,188,250);
  green=map(mx,0,399,140,250);
  blue=map(mx,0,399,15,250);
  fill(red, green, blue);
  cone(25, 50);
  pop();
  pop();
  //montañas
  push();
   translate(0,25,0);
   push();
   translate(-300,25,-600);
   red=map(mx,0,399,204,220);
  green=map(mx,0,399,142,220);
  blue=map(mx,0,399,9,220);
   fill(red, green, blue);
   ellipsoid(400, 300, 200);
  pop();
  push();
    translate(300,25,-600);
  red=map(mx,0,399,204,220);
  green=map(mx,0,399,142,220);
  blue=map(mx,0,399,9,220);
   fill(red, green, blue);
  ellipsoid(400, 300, 200);
  pop();
  pop();
  //casita
  translate(0, 0, 0);
  push();
  rotateZ(PI);
  red=map(mx,0,399,229,239);
  green=map(mx,0,399,198,219);
  blue=map(mx,0,399,152,162);
  fill(red, green, blue);
  box(100,100);
  translate(0, 0, 40);
   fill(91, 0, 0);
  box (30,40);
  translate(0, 82, 0);
    red=map(mx,0,399,140,240);
  green=map(mx,0,399,89,240);
  blue=map(mx,0,399,23,240);
  fill(red, green, blue);
  cone(80, 80);
  pop();
  //sol
   translate(0, 0, 0);
  push();
  rotateZ(PI);
  translate(0, 260, 0);
  red=map(mx,0,399,251,252);
  green=map(mx,0,399,234,247);
  blue=map(mx,0,399,95,180);
  fill(red, green, blue);
  sphere(20,20);
  pop();
  




  // ------- SU CODIGO AQUÍ ------- //


  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
}