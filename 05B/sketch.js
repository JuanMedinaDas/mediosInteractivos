//declaracion de variables
var hora;
var segundo;
var minuto;
//variables de color y alerta
var tiempoRapido;
var tiempoLento;
// variables maps
var segundoMapeado;
var minutoMapeado;
var horaMapeada;
//variable de cambio de tiempo para la prcepcion
var cambio;

function setup() { 
  createCanvas(600, 600);
  //modo de medicion de angulos
  angleMode(DEGREES);
  //estados de cambio de color
  tiempoRapido=0;
  tiempoLento=0;
  
} 

function draw() { 
  //cambio de color conforme el tiempo
  background(tiempoLento,tiempoRapido,0);
  //declaracion de variables
  hora=hour();
  minuto=minute();
  segundo=second();
    
 //condicionales de percepcion de tiempo
  if(minuto<30){
   cambio=5;
   tiempoRapido=255;
   tiempoLento=0;
  }
  if(minuto>30){
    
   cambio=-5;
   tiempoRapido=0;
   tiempoLento=255;
  }
 
  //creacion del escenario n
  push();
  translate(width/2,height/2);
  noStroke();
  fill(255);
  ellipse(0,0,400,400);
  strokeWeight(4);
  stroke(tiempoLento,tiempoRapido,0);
  line(0,0,0,-200);
  line(0,0,200,0);
  line(0,0,0,200);
  line(0,0,-200,0);
  pop();
  //minutero
  push(); 
  translate(width/2, height/2);
  segundoMapeado = map(segundo,0,59,0,359);
  rotate(segundoMapeado+cambio);
   noStroke();
  fill(0,0,255);
  ellipse(0,-150,25,25);
  pop();
    //secundero
  push(); 
  translate(width/2, height/2);
  minutoMapeado = map(minuto,0,59,0,359);
  rotate(minutoMapeado+cambio);
  noStroke();
  fill(0,255,0);
  ellipse(0,-125,25,25);
  pop();
   //horario
   push(); 
  translate(width/2, height/2);
  horaMapeada= map(hora,0,11,0,359);
  rotate(horaMapeada);
  noStroke();
  fill(255,0,0);
  ellipse(0,-100,25,25);
  pop();  
}