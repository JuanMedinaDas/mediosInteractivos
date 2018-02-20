//declaracion de varibles
var activacion1;
var activacion2;
var activacion3;
var activacion4;
var activacion5;
var tamañorectx;
var tamañorectxy;
var pocisionx;
var pocisiony;


function setup() { 
  createCanvas(600,600);
	background(255);
//activacion de variables
activacion1=0;
activacion2=0;
activacion3=0;
activacion4=0;
activacion5=0;
tamañorectx=0;
tamañorecty=0;
pocisionx=0;
pocisiony=0;

} 

function draw() { 
	
	//dibujo de las herramientas
		if (mouseIsPressed && activacion1==255){
		noStroke();
		fill(0);
		ellipse(mouseX,mouseY,5,5);
			}
	  if (mouseIsPressed && activacion2==255){
		noStroke();
		fill(255);
		ellipse(mouseX,mouseY,70,70);
			}
	  if (mouseIsPressed && activacion3==255){	
		stroke(0);
		fill(255);
			
			if (mouseReleased)
			{
				background(255);
				tamañorectx = mouseX
				tamañorecty = mouseY
				rect(mouseX,mouseY,tamañorectx,tamañorecty);
			}
			

			}
	  if (mouseIsPressed && activacion4==255){	
		stroke(0);
		fill(255);
			
			if (mouseReleased)
			{
				background(255);
				tamañorectx = mouseX
				tamañorecty = mouseY
			}
			
		ellipse(mouseX,mouseY,tamañorectx,tamañorecty);
			}
		  if (mouseIsPressed && activacion5==255){	
		
		fill(255);
			
			if (mouseReleased)
			{
				
				tamañorectx = mouseX
				tamañorecty = mouseY
			}
			
	line(mouseX,0,mouseX,600);
			}
	
	  
	//creacion de botones
	stroke(0);
	fill(255);
	rect(0,0,599,80);
	fill(activacion1,68,154);
  rect(25,30,20,20);
	fill(activacion2,67,178);
	rect(50,30,20,20);
	fill(activacion3,156,38);
	rect(75,30,20,20);
	fill(activacion4,222,89);
	rect(100,30,20,20);
	fill(activacion5,67,217);
	rect(125,30,20,20);
	

	
}

	function mouseReleased() {
  if (tamañorectx === 0) {
    tamañorectx= 255;
  } else {
    tamañorectx = 0;
  }
	}
//activacion de botones
function mouseClicked() {
  if (activacion1 === 0 && mouseX<45 && mouseX>25 && mouseY<50 && mouseY>30 ) {
    activacion1 = 255;
  } else {
    activacion1 = 0;
  }
	 if (activacion2 === 0 && mouseX<70 && mouseX>50 && mouseY<50 && mouseY>30 ) {
    activacion2 = 255;
  } else {
    activacion2 = 0;
  }
	  if (activacion3 === 0 && mouseX<95 && mouseX>75 && mouseY<50 && mouseY>30 ) {
    activacion3 = 255;
  } else {
    activacion3 = 0;
  }
	 if (activacion4 === 0 && mouseX<120 && mouseX>100 && mouseY<50 && mouseY>30 ) {
    activacion4 = 255;
  } else {
    activacion4 = 0;
  }
	 if (activacion5 === 0 && mouseX<145 && mouseX>125 && mouseY<50 && mouseY>30 ) {
    activacion5 = 255;
  } else {
    activacion5= 0;
  }
	
}