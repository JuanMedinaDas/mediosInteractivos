var posy;
var posx;
var dir;
var limite1;
var limite2;
var limite3;
var limite4;
var posy2;
var posy3;
var posx3;
var dir2 ;
function setup() { 
  createCanvas(400, 300);
	background(0,0,0);
	frameRate(240);
	background(0,0,0);
	posx=0;
	posy=0;
	dir =1;
	dir2=1;
	limite1=240;
	limite2=0;
	limite3=368;
	limite4=23;
  posy2=240;
	posx3=190;
	posy3=140;
	
} 

function draw() { 
  background(0,0,0);
	fill(250,250,250);
	
	//pelota
	rect(posx3,140,10,10);
	posx3=posx3+(0.5)*dir2;
	if(posx3==limite3){
	dir2=dir2*(-1);
	}
		if(posx3==limite4){
	dir2=dir2*(-1);
	}
	//paleta 1
	rect(height/24,posy,10,60)
	posy=posy+1*dir;
	if(posy==limite1){
	dir=dir*-1;
	}
	if(posy==limite2){
		dir=dir*-1;
	}
	//paleta 2
	rect(375,posy2,10,60)
	posy2=posy2-1*dir;
	if(posy2==limite1){
	dir=dir*-1;
	}
	if(posy2==limite2){
		dir=dir*-1;
	}
	//fondo
				noStroke();
	fill(255,255,255);
	rect(192,125,8,50);
  rect(192,195,8,50);
  rect(192,265,8,50);
	rect(192,55,8,50);
	rect(192,-15,8,50);
  
	//marcador
	rect(96,25,25,40);
	rect(267,25,25,40);
	fill(0,0,0);
	rect(101,30,15,30);
	rect(272,30,15,30);
}