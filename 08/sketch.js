//declaracion de variables
var miSonido;
var amplitud;
var amplitudnum;

function preload(){
  //preload del sonido
  miSonido=loadSound('Dinura.mp3');
}


function setup() {
  createCanvas(600, 600);
  //llamado de funciones de p5.sound
   background(0);  
   miSonido.loop();
  amplitud = new p5.Amplitude();
}

function draw() {
  background(0);
//asignarle un valor numerico a la amplitud
  var nivel = amplitud.getLevel();
  nivel = map(nivel, 0.0, 1.0, 0, 1000);
 //crecimiento de la onda
  amplitudnum=300-(nivel);
  miSonido.setVolume(map(mouseY, 400, 0, 0.0, 1.0));
  //mapear ese valor con respecto a la pocision del mouse
  miSonido.rate(map(mouseX, 400, 0, -1.0, 2));
  //ocsiloscopio
  beginShape();
    vertex(0,310);
    vertex(0, 300); 
    vertex(30, amplitudnum);
    vertex(60, amplitudnum);
    vertex(90,300);
    vertex(120, amplitudnum); 
    vertex(150, amplitudnum);
    vertex(180,300);
    vertex(210, amplitudnum);
    vertex(240, amplitudnum);
    vertex(270,300);
    vertex(300, amplitudnum);
    vertex(330, amplitudnum); 
    vertex(360, 300);
    vertex(390, amplitudnum);
    vertex(420, 300);
    vertex(450, amplitudnum);
    vertex(480, amplitudnum);
    vertex(510, 300);
    vertex(540, amplitudnum); 
    vertex(570, amplitudnum);
    vertex(600, 300);
    vertex(600,310);
endShape(CLOSE);
}
function mouseReleased() {
  //acciones de manipulacion del sonido con el mouse
 
  miSonido.jump(miSonido.currentTime()+10);
  
  if (miSonido.isPaused()){
   miSonido.play();
  }
  else 
  {
    miSonido.pause();
 }
}
