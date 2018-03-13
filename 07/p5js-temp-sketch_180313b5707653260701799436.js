//declaracion de variables  
  var imagen1;
  var imagen2;
  var imagen3;
  var imagen4;
//declaracion de varibles botones
  var activacion1;
  var activacion2;
  var activacion3;
  var activacion4;
  var activacion5;
  var activacion6;
  var activacion7;
  var activacion8;
  var activacion9;
  var reinicio;
//declaracion de variables de filtros
  var filtro1;
  var filtro2;
  var filtro3;
  var filtro4;
//declaracion de variables de dibujo  
  var tamañorectx;
  var tamañorectxy;
  var pocisionx;
  var pocisiony;

//se carga la imágen en el sketch, la imágen debe llevar el nombre
//con el que la subieron a la carpeta de assets
function preload() 
{
 imagen1 = loadImage('assets/Atardecer.jpg');
 imagen2 = loadImage('assets/Pradera.jpg');
 imagen3 = loadImage('assets/Egipto.jpg'); 
 imagen4 = loadImage('assets/mar.jpg');
}


function setup() {
  background(255);
  createCanvas(600, 600);
//activacion de variables de acciones
  activacion1=0;
  activacion2=0;
  activacion3=0;
  activacion4=0;
  activacion5=0;
  activacion6=0;
  activacion7=0;
  activacion8=0;
  activacion9=0;
  reinicio=0
//activacion de los filtros
  filtro1=0;
  filtro2=0;
  filtro3=0;
  filtro4=0; 
//activacion de variables de pocision  
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
    reinicio=255;
      }
    if (mouseIsPressed && activacion2==255){
    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,70,70);
    reinicio=255;
      }
    if (mouseIsPressed && activacion3==255){  
    stroke(0);
    fill(255);
    reinicio=255;  
      if (mouseReleased)
      {
        background(255);
        tamañorectx = mouseX
        tamañorecty = mouseY
        rect(mouseX,mouseY,tamañorectx,tamañorecty);
        reinicio=255;
      }
      

      }
    if (mouseIsPressed && activacion4==255){  
    stroke(0);
    fill(255);
    reinicio=255;
      
      if (mouseReleased)
      {
        background(255);
        tamañorectx = mouseX
        tamañorecty = mouseY
        reinicio=255;
      }
      
    ellipse(mouseX,mouseY,tamañorectx,tamañorecty);
      }
      if (mouseIsPressed && activacion5==255){  
    
    fill(255);
     reinicio=255;
      if (mouseReleased)
      {
        
        tamañorectx = mouseX
        tamañorecty = mouseY
      }
      
  line(mouseX,0,mouseX,600);
      }
//dibujo de las imagenes 
  if (mouseIsPressed && activacion6==255){
    image(imagen1,25,100,0,0);
    reinicio=255;
  }
//filtros imagen 1
     if (mouseIsPressed && activacion6==255 && filtro1==255){
    noTint();  
    image(imagen1,25,100,0,0);
    filter(INVERT); 
    reinicio=255;
  }
  if (mouseIsPressed && activacion6==255 && filtro2==255){
    noTint(); 
    image(imagen1,25,100,0,0);
    filter(THRESHOLD);
    reinicio=255;
  }
  if (mouseIsPressed && activacion6==255 && filtro3==255){
    noTint();  
    image(imagen1,25,100,0,0);
    filter(POSTERIZE, 3); 
    reinicio=255;
  }
  if (mouseIsPressed && activacion6==255 && filtro4==255){
    noTint();  
    image(imagen1,25,100,0,0);
    filter(BLUR,3); 
    reinicio=255;
  }
//final filtros imagen 1
    if (mouseIsPressed && activacion7==255){
   
    image(imagen2,25,100,575,360);
    reinicio=255;
  }
//filtros imagen 2
     if (mouseIsPressed && activacion7==255 && filtro1==255){
    noTint();  
    image(imagen2,25,100,575,360);
    filter(INVERT);
    reinicio=255;
  }
  if (mouseIsPressed && activacion7==255 && filtro2==255){
    noTint(); 
    image(imagen2,25,100,575,360);
    filter(THRESHOLD);
    reinicio=255;
  }
  if (mouseIsPressed && activacion7==255 && filtro3==255){
    noTint();  
    image(imagen2,25,100,575,360);
    filter(POSTERIZE, 3);
    reinicio=255;
  }
  if (mouseIsPressed && activacion7==255 && filtro4==255){
    noTint();  
    image(imagen2,25,100,575,360);
    filter(BLUR,3); 
    reinicio=255;
  }
//final filtros imagen 2
    if (mouseIsPressed && activacion8==255){
   
    image(imagen3,25,100,575,360);
    reinicio=255;
  }
  //filtros imagen 3
     if (mouseIsPressed && activacion8==255 && filtro1==255){
    noTint();  
    image(imagen3,25,100,575,360);
    filter(INVERT);
    reinicio=255;
  }
  if (mouseIsPressed && activacion8==255 && filtro2==255){
    noTint();
    image(imagen3,25,100,575,360);
    filter(THRESHOLD);
    reinicio=255;
  }
  if (mouseIsPressed && activacion8==255 && filtro3==255){
    noTint();  
    image(imagen3,25,100,575,360);
    filter(POSTERIZE, 3); 
    reinicio=255;
  }
  if (mouseIsPressed && activacion8==255 && filtro4==255){
    noTint();  
    image(imagen3,25,100,575,360);
    filter(BLUR,3); 
    reinicio=255;
  }
//final filtros imagen 3
    if (mouseIsPressed && activacion9==255){
    image(imagen4,25,100,575,360);
    reinicio=255;
  }
  //filtros imagen 4
     if (mouseIsPressed && activacion9==255 && filtro1==255){
    noTint();  
    image(imagen4,25,100,575,360);
    filter(INVERT); 
    reinicio=255;
  }
  if (mouseIsPressed && activacion9==255 && filtro2==255){
    noTint();
    image(imagen4,25,100,575,360);
    filter(THRESHOLD);
    reinicio=255;
  }
  if (mouseIsPressed && activacion9==255 && filtro3==255){
    noTint();  
    image(imagen4,25,100,575,360);
    filter(POSTERIZE, 3); 
    reinicio=255;
  }
  if (mouseIsPressed && activacion9==255 && filtro4==255){
    noTint();  
    image(imagen4,25,100,575,360);
    filter(BLUR,3); 
    reinicio=255;
  }
//final filtros imagen 4
//dibujo de imagenes con filtro  
    
//creacion de botones de dibujo
  noStroke();
// barra de tareas
  fill(230);
  rect(0,0,599,90);
  fill(0);
  textSize(15);
  text('pinceles', 25, 20);
  text('filtros', 175, 20);
  text('imagenes', 300, 20);
  text('reset', 400, 20);
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
//creacion de botones de filtro
  fill(filtro1,67,217);
  rect(175,30,20,20);
  fill(filtro2,67,217);
  rect(200,30,20,20);
  fill(filtro3,67,217);
  rect(225,30,20,20);
  fill(filtro4,67,217);
  rect(250,30,20,20);
//creacion de botones de imagen
 image(imagen1, 300, 30,20,20);
 image(imagen2, 325, 30,20,20);
 image(imagen3, 350, 30,20,20);
 image(imagen4, 375, 30,20,20);
//creacion de boton de reinicio
 fill(reinicio,67,217);
 rect(400,30,30,30);
 
  

  
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
//botones de filtro
   if (filtro1 === 0 && mouseX<195 && mouseX>175 && mouseY<50 && mouseY>30 ) {
    filtro1 = 255;
    filtro2 = 0;
    filtro3 = 0;
    filtro4 = 0;
    reinicio = 255;
  } 
   if (filtro2 === 0 && mouseX<220 && mouseX>200 && mouseY<50 && mouseY>30 ) {
    filtro1 = 0;
    filtro2 = 255;
    filtro3 = 0;
    filtro4 = 0;
    reinicio = 255;
  } 
   if (filtro3=== 0 && mouseX<245 && mouseX>225 && mouseY<50 && mouseY>30 ) {
    filtro1 = 0;
    filtro2 = 0;
    filtro3 = 255;
    filtro4 = 0;
    reinicio = 255;
  }
   if (filtro4=== 0 && mouseX<270 && mouseX>250 && mouseY<50 && mouseY>30 ) {
    filtro1 = 0;
    filtro2 = 0;
    filtro3 = 0;
    filtro4 = 255;
    reinicio = 255;
  } 
  
//botones de imgenes 
   if (activacion6 === 0 && mouseX<320 && mouseX>300 && mouseY<50 && mouseY>30 ) {
    activacion6 = 255;
  } else {
    activacion6= 0;
  }
    if (activacion7 === 0 && mouseX<345 && mouseX>325 && mouseY<50 && mouseY>30 ) {
    activacion7 = 255;
  } else {
    activacion7= 0;
  }
     if (activacion8 === 0 && mouseX<370 && mouseX>350 && mouseY<50 && mouseY>30 ) {
    activacion8 = 255;
  } else {
    activacion8= 0;
  }
    if (activacion9 === 0 && mouseX<395 && mouseX>375 && mouseY<50 && mouseY>30 ) {
    activacion9 = 255;
  } else {
    activacion9= 0;
  }
//boton de reinicio
  if (reinicio === 255 && mouseX<430 && mouseX>400 && mouseY<60 && mouseY>30 ) {
    reinicio=0;
    filtro1=0;
    filtro2=0;
    filtro3=0;
    filtro4=0;
  }
}
