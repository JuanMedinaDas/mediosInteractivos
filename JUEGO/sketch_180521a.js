var ship;

var disparos;

var hordas = [];

var astros = [];

var contador;

var multiplicador;

var multiplicador2;

var multiplicador3;

var cantidadenemigos = 4;

var cantidadeestrellas = 100;

var dron1;

var dron2;

var pantalla = 0;
//----------------------------------------------------------------------------------------
//imagenes y preload
var imagennave;
var imagenmeteoro;
var imagenvelocidad;
var imagenbotiquin;
var imagebalabonus;
//pantallas
var imagenpantallainicial;
var comandos;
var imagenpantallacreditos;
//
function preload(){
imagennave = loadImage('assets/xwing.png');
imagenmeteoro = loadImage('assets/meteoro.png');
imagenvelocidad = loadImage('assets/velocidad.png');
imagenbotiquin = loadImage('assets/botiquin.png');
imagebalabonus = loadImage('assets/balabonus.png');
imagenpantallainicial= loadImage('assets/pantallainicio.png');
comandos= loadImage('assets/comandos.png');
imagenpantallacreditos= loadImage('assets/pantallafinal2.png');
}
function setup() {

createCanvas(2048, 2732);

dron1 = new bala2();

dron2 = new bala3();

ship = new nave();

disparos = new bala();

for (i = 0; i < cantidadenemigos; i++) {

hordas[i] = new enemigo();

}
for (v = 0; v < cantidadeestrellas; v++) {

astros[v] = new estrellas();

}


multiplicador = new bonus(0, 0, 255);

multiplicador2 = new bonus2(0, 255, 0);

multiplicador3 = new vida(255, 0, 0);


contador = new puntaje();

}

//--------------------------------------------------------------------------------------------------------

function draw() {
  
if (pantalla == 0){
background(24,29,40);
for (v = 0; v < astros.length; v++) {
astros[v].dibujarse();
astros[v].moverse();
} 
imageMode(CORNER);
image(imagenpantallainicial,0,0,2048, 2732);
ship.dibujarse();
} 
//-------------------------------------------------------------------------------------
if (pantalla == 3){
background(24,29,40);
for (v = 0; v < astros.length; v++) {
astros[v].dibujarse();
astros[v].moverse();
}
fill(255);
textSize(200);
text( contador.numero, (width/2)-100, (height/3));

imageMode(CORNER);
image(imagenpantallacreditos,0,0,2048, 2732);
} 
//-------------------------------------------------------------------------------------
if (pantalla == 2){
background(24,29,40);
for (v = 0; v < astros.length; v++) {
astros[v].dibujarse();
astros[v].moverse();
}
imageMode(CORNER);
image(comandos,0,0,2048, 2732);
//rect(1155,2300,830,240);
} 
//---------------------------------------------------------------------------------------------------
if(pantalla == 1){
background(24,29,40);

contador.dibujarse();

multiplicador.dibujarse();

multiplicador.morirse();

multiplicador2.dibujarse();

multiplicador2.morirse();

multiplicador3.dibujarse();

multiplicador3.morirse();


if ((contador.numero % 100 == 0) && contador.numero != 0 && mouseIsPressed) {

multiplicador3.moverse();

}

if ((contador.numero % 10 == 0) && contador.numero != 0 && mouseIsPressed) {

multiplicador.moverse();

}

if ((contador.numero % 30 == 0) && contador.numero != 0 && mouseIsPressed) {

multiplicador2.moverse();


}

if (multiplicador2.estado > 1) {

dron1.draw();

if (mouseIsPressed) {

dron1.moverse();

}

}

if (multiplicador2.estado > 2) {

dron2.draw();

if (mouseIsPressed) {

dron2.moverse();

}

}

ship.dibujarse();

disparos.draw();

if (mouseIsPressed) {

disparos.moverse();

ship.moverse();

}
for (v = 0; v < astros.length; v++) {

astros[v].dibujarse();
astros[v].moverse();
}

for (i = 0; i < hordas.length; i++) {

hordas[i].dibujarse();

if (mouseIsPressed) {

hordas[i].morirse();

hordas[i].moverse();

hordas[i].dañar();

}

}

}
}
//--------------------------------------------------------------------------------------------------


function nave() {
this.x =  width/ 2;

this.y = ((height / 3) * 2);

this.vivo = true;

this.tamaño = 60;

this.vidas = 3;

this.dibujarse = function() {

imageMode(CENTER);
if(pantalla == 0){
  this.x =  width/ 2;

this.y = 2200;

this.vivo = true;

this.tamaño = 180;
} 

image(imagennave,this.x, this.y, this.tamaño, this.tamaño);

//}

}


this.moverse = function() {

if (this.vivo == true && this.vidas > 0) {

this.x = mouseX;

this.y = mouseY;
}

}

}

//--------------------------------------------------------------------------------------------------------

function bala() {

this.potencia = 25;

this.x = mouseX;

this.y = mouseY - 30;

this.r = 5;

this.draw = function() {

noStroke();

fill(255, 255, 0);

ellipse(this.x, this.y, this.r * 2, this.r * 4);

fill(255, 0, 0);

ellipse(this.x, (this.y + 6), this.r, this.r * 2);

}

this.moverse = function() {
if (ship.vidas > 0) {
this.y = this.y - this.potencia;

if (this.y < 0) {

this.x = mouseX;

this.y = mouseY - 30;

}
}
}

}

//--------------------------------------------------------------------------------------------------------

function bala2() {

this.potencia = 25;

this.x = (mouseX + 70);

this.y = mouseY - 30;

this.r = 5;

this.draw = function() {


noStroke();

fill(255, 255, 0);

ellipse(this.x, this.y, this.r * 2, this.r * 4);

fill(255, 0, 0);

ellipse(this.x, (this.y + 6), this.r, this.r * 2);

}

this.moverse = function() {
if (ship.vidas > 0) {

this.y = this.y - this.potencia;

if (this.y < 0) {

this.x = (mouseX + 70);

this.y = mouseY - 30;

}
}
}

}

//--------------------------------------------------------------------------------------------------------

function bala3() {



this.potencia = 25;

this.x = (mouseX - 70);

this.y = mouseY - 30;

this.r = 5;

this.draw = function() {

noStroke();

fill(255, 255, 0);

ellipse(this.x, this.y, this.r * 2, this.r * 4);

fill(255, 0, 0);

ellipse(this.x, (this.y + 6), this.r, this.r * 2);

}

this.moverse = function() {
if (ship.vidas > 0) {

this.y = this.y - this.potencia;

if (this.y < 0) {

this.x = (mouseX - 70);

this.y = mouseY - 30;

}
}
}

}

//---------------------------------------------------------------------------------------------------

function enemigo() {

this.x = random(width);

this.y = random(-100, -800);

this.r = random(30,50);
this.rango = 75;

this.moverse = function() {
if (ship.vidas > 0) {
this.y = this.y + 5;
if (this.y > height) {
this.x = random(width);

this.y = random(-100, -800);

}
}
}
this.dañar = function() {
if (dist(this.x, this.y, ship.x, ship.y ) < this.rango) {

ship.vidas--;
if(ship.vidas==0){
pantalla = 3;
}

this.r = this.r + 10;
      
this.rango = this.rango +20;
multiplicador2.estado = 1;

disparos.potencia = 15;

dron1.potencia = 15;

dron2.potencia = 15;

this.x = random(width);

this.y = random(-100, -800);
}

}
this.morirse = function() {

if (dist(this.x, this.y, disparos.x, disparos.y) < this.r) {

this.x = random(width);

this.y = random(-100, -300);

disparos.x = mouseX;

disparos.y = mouseY;

contador.numero = contador.numero + 1;

if ((contador.numero % 20 == 0) && contador.numero != 0 && mouseIsPressed) {

cantidadenemigos++;

hordas[cantidadenemigos - 1] = new enemigo();

}

}

if (dist(this.x, this.y, dron1.x, dron1.y) < this.r) {

this.x = random(width);

this.y = random(-100, -300);

dron1.x = mouseX;

dron1.y = mouseY;

contador.numero = contador.numero + 1;

}

if (dist(this.x, this.y, dron2.x, dron2.y) < this.r) {

this.x = random(width);

this.y = random(-100, -300);

dron2.x = mouseX;

dron2.y = mouseY;

contador.numero = contador.numero + 1;

}

}

this.dibujarse = function() {

fill(255, 0, 200);

image(imagenmeteoro,this.x, this.y, this.r * 2, this.r * 2);

}

}

//---------------------------------------------------------------------------------------------------

function estrellas() {

this.x = random(width);

this.y = random(height , -900);

this.r = random(5,10);
this.moverse = function() {
  
if ( pantalla != 1) {
this.y = this.y + 0.2;
if (this.y > height) {
this.x = random(height);

this.y = random(-100, -800);

}
}  
if (ship.vidas > 0 && mouseIsPressed && pantalla ==1) {
this.y = this.y + 0.6;
if (this.y > height) {
this.x = random(height);

this.y = random(-100, -800);

}
}
}


this.dibujarse = function() {

fill(255);
ellipse(this.x,this.y,this.r,this.r);

}

}

//-------------------------------------------------------------------

function puntaje() {

this.x = 90;

this.y = ((height/3)*2)+750;

this.numero = 0;

this.dibujarse = function() {

fill(255);

textSize(90);

text('PUNTAJE: ' + this.numero, this.x, this.y);


text('VIDAS: ' + ship.vidas, this.x, this.y + 100);
}

}

//-------------------------------------------------------------------

function bonus(x, y, z) {

this.x = random(width);

this.y = random(-10, -30);

this.r = 20;

this.moverse = function() {

this.y = this.y + 5;
if (this.y > windowWidth+100) {
this.x = random(width);

this.y = random(-10, -20);

}

}

this.morirse = function() {

if (dist(this.x, this.y, ship.x, ship.y) < 40) {

this.x = random(width);

this.y = random(-20, -30);
if ( disparos.potencia < 50){
disparos.potencia = disparos.potencia + 5;

dron1.potencia = dron1.potencia + 5;

dron2.potencia = dron2.potencia + 5;

}

}

}

this.dibujarse = function() {

fill(x, y, z);

image(imagenvelocidad,this.x, this.y, this.r * 2, this.r * 2);

}

}

//-------------------------------------------------------------------

function bonus2(x, y, z) {

this.x = random(width);

this.y = random(-10, -30);

this.r = 20;

this.estado = 1;

this.moverse = function() {

this.y = this.y + 5;
if (this.y > width+100) {
this.x = random(width);

this.y = random(-10, -20);

}
}

this.morirse = function() {

if (dist(this.x, this.y, ship.x, ship.y) < 40) {
this.x = random(width);

this.y = random(-20, -30);

this.estado++;

if (multiplicador2.estado > 3 && disparos.potencia < 50) {

dron1.r++;

dron2.r++;

disparos.r++;

}

}

}

this.dibujarse = function() {

fill(x, y, z);

image(imagebalabonus,this.x, this.y, this.r * 2, this.r * 2);

}


}
//-----------------------------------------------------------------
function vida(x, y, z) {

this.x = random(width);

this.y = random(-10, -30);

this.r = 20;

this.dibujarse = function() {

fill(x, y, z);

image(imagenbotiquin,this.x, this.y, this.r * 2, this.r * 2);

}
this.moverse = function() {

this.y = this.y + 5;

}

this.morirse = function() {

if (dist(this.x, this.y, ship.x, ship.y) < 40) {

this.x = random(width);

this.y = random(-20, -30);

ship.vidas++;
}

}



}

//-------------------------------------------------------------------

function mouseDragged() {


return false;

}
//------------------------------------------------------------------------------------
function mouseClicked() {

  if (pantalla == 0 && mouseX<1455 && mouseX>525 && mouseY<1656 && mouseY>1466 ) {
 pantalla =2;
  }
    if (pantalla == 0 && mouseX<1455 && mouseX>525 && mouseY<1858 && mouseY>1666 ) {
 pantalla =1;
  }
     if (pantalla == 2 && mouseX<1985 && mouseX>1155 && mouseY<2540 && mouseY>2300 ) {
 pantalla =0;
  }
       if (pantalla == 3 && mouseX<1430 && mouseX>650 && mouseY<1940 && mouseY>1600 ) {
 pantalla = 0;
 contador.numero =0;
 ship.vidas=3;
  }
}

