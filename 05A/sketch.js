//declaracion de variables
var segundo;
var minuto;
var hora;
var segundoMapeado;
var minutoMapeado;
var horaMapeada;

function setup() { 
angleMode(DEGREES);
  createCanvas(600, 600);

} 

function draw() { 
  background((hora+200),(segundo+60),(minuto+60));
//inicialiacion de variables
segundo= second();
minuto= minute();
hora= hour();
//push es el inicio de un proceso aislado
//segundero
push();
//translate mueve el punto de inicio 
noStroke();
fill(255);
translate(width/4, height/2);
  ellipse(0,0,(segundo*4),(segundo*4));
  segundoMapeado = map(segundo,0,59,0,359);
  rotate(segundoMapeado);
  pop();
//pop es el cierre de un proceso aislado
//minutero
push();
noStroke();
translate((width-80),0);
fill(255);
rect(0,minutoMapeado,80,80);
minutoMapeado = map(minuto,0,59,0,599);
  pop();
//hora
push();
noStroke();
translate(width-300,height-500);
rotate(horaMapeada);
fill(255);
rect(-40,-10,80,20);
rect(-10,-40,20,80);
strokeWeight(4);
stroke(255);
line(-30,30,30,-30);
line(-30,-30,30,30);
fill(255,0,0);
ellipse(0,-40,15,15);
horaMapeada = map(hora,0,12,0,355);
  pop();
}