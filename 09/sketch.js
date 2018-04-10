//declaracion de variables
var depredador = [];
var insecto = [];
var planta = [];
var pez = [];
var rana;
var vida;
//setup del canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(158, 201, 205);
  //for para mosquitos 
  for (var c = 0; c < 9; c = c + 1) {
    insecto[c] = new mosquito();
  }
  // declaracion de la rana
  rana = new ranaVerde();
  // declaracion de la barra de vida
  vida = new barra();
  //for para plantas 
  for (var b = 0; b < 9; b = b + 1) {
    planta[b] = new plantaCorazon();
  }
  //for para peces 
  for (var v = 0; v < 9; v = v + 1) {
    pez[v] = new magikarp();
  }
  //for para peces lagarto
  for (var i = 0; i < 6; i = i + 1) {
    depredador[i] = new cocodrilo();
  }
}

function draw() {
  background(158, 201, 205);

  //acciones del pez
  for (var v = 0; v < 9; v = v + 1) {
    pez[v].dibujarse();
    pez[v].moverse();
  }
  //acciones de la planta
  for (var b = 0; b < 9; b = b + 1) {
    planta[b].dibujarse();
  }
  //acciones de la rana
  rana.dibujarse();
  rana.moverse();
  // acciones del insecto
  for (var c = 0; c < 9; c = c + 1) {
    insecto[c].dibujarse();
    insecto[c].moverse();
  }

  //acciones del depredador 
  for (var i = 0; i < 6; i = i + 1) {
    depredador[i].dibujarse();
  }
  //acciones barra de vida
  vida.dibujarse();
  // condicionales e interacciones

  if (mouseIsPressed == true) {
    rana.x = mouseX;
    rana.y = mouseY;
  }
}

//declaracion clase barra
function barra() {
  this.x=70;
  this.y=20;
  this.largo=500;
  this.presas=9;
  this.dibujarse = function() {
    // barra de vida
    fill(255, 50, 20);
    rect(this.x, this.y, this.largo, 30);
    fill(255);
    text('vida', 75, 40);
    fill(0);
   text('catch all the flies to win: '+ this.presas, 75, 64);
    if (this.presas<1) {
      fill(0);
      rect(0, 0, windowWidth, windowHeight);
      fill(0, 255, 0);
      text('you win', windowWidth/2, windowHeight/2, 100, 100);
      fill(0, 255, 0);
      text('refresh the page', windowWidth/2, ((windowHeight/2)+20), 100, 100);
    }
    if (this.largo<0) {
      fill(0);
      rect(0, 0, windowWidth, windowHeight);
      fill(255, 0, 0);
      text('game over', windowWidth/2, windowHeight/2, 100, 100);
      fill(255, 0, 0);
      text('refresh the page', windowWidth/2, ((windowHeight/2)+20), 100, 100);
    }
  }
}
// declaracion de la clase mosquito
function mosquito() {
  // acciones de la clase mosquito
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
  this.vivo = 1;
  this.direccion=int(-1, 1);
  this.dibujarse = function() {
    if (this.vivo == 1) {
      stroke(1);
      fill(0, 0, 100, 50);
      ellipse((this.x + 10), (this.y - 20), this.tamano, this.tamano);
      ellipse((this.x - 10), (this.y - 20), this.tamano, this.tamano);
      noStroke();
      fill(0);
      ellipse(this.x, this.y, (this.tamano + 20), (this.tamano - 10));
      triangle((this.x), (this.y - 5* - this.direccion), (this.x + 60* - this.direccion), (this.y ), (this.x), (this.y + 5* - this.direccion));
      var ent = dist (this.x, this.y, rana.x, rana.y);
      if (ent<30) {
        this.vivo=0;
        vida.largo = vida.largo +20 ;
        vida.presas = vida.presas -1 ;
      }
    }
    this.morirse = function() {

      this.vivo=0;
    }
  }
  this.moverse = function() {
    if (this.x>800 && this.y>800) {
      this.direccion = (this.direccion * -1)
    }
    if (this.x<0 && this.y<0) {
      this.direccion = (this.direccion * -1)
    }
    this.x = this.x + (-1 * this.direccion);
    this.y = this.y + (-1 * this.direccion);
  }
}
// declaracion de la clase ranaVerde
function ranaVerde() {
  // acciones de la clase ranaVerde
  this.x = 130;
  this.y = 150;
  this.tamano = 90;
  this.vivo = 1;
  this.dibujarse = function() {
    if (this.vivo == 1) {
      noStroke();
      fill(121, 156, 54);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse((this.x + 30), (this.y + 22), (this.tamano / 2), (this.tamano / 2));
      ellipse((this.x - 30), (this.y + 22), (this.tamano / 2), (this.tamano / 2));
      rect((this.x - 55), (this.y + 35), (this.tamano + 20), 10);
      fill(250);
      ellipse((this.x + 20), (this.y - 35), (this.tamano / 2), (this.tamano / 2));
      ellipse((this.x - 20), (this.y - 35), (this.tamano / 2), (this.tamano / 2));
      fill(149, 185, 95);
      ellipse(this.x, (this.y + 22), (this.tamano / 2), (this.tamano / 2));
      fill(0);
      ellipse((this.x + 20), (this.y - 35), (this.tamano / 10), (this.tamano / 10));
      ellipse((this.x - 20), (this.y - 35), (this.tamano / 10), (this.tamano / 10));
      fill(206, 115, 124);
      rect((this.x - 45), (this.y - 4), (this.tamano), 4);
    }
    this.morirse = function() {
      this.vivo = 0;
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
// declaracion de la clase plantaCorazon
function plantaCorazon() {
  // acciones de la clase  plantaCorazon
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = random(50, 150);
  this.vivo = 1;
  this.dibujarse = function() {
    if (this.vivo == 1) {
      var dar = dist (this.x, this.y, rana.x, rana.y);
      if (dar<30 && this.tamano< 200) {
        this.tamano = this.tamano+1;
      }
      noStroke();
      fill(124, 157, 53);
      ellipse((this.x), (this.y), this.tamano, this.tamano);
      fill(149, 185, 95);
      ellipse((this.x), (this.y), (this.tamano - 10), (this.tamano - 10));
      fill(124, 157, 53);
      ellipse((this.x), (this.y), (this.tamano - 20), (this.tamano - 20));
    }
    this.morirse = function() {
      this.vivo = 0;
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

    if (this.y < 100) {
      this.y = 100;
    }

    this.morirse = function() {
      this.vivo = 0;
    }
  }
}
// declaracion de la clase magikarp
function magikarp() {
  // acciones de la clase magikarp
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = random(50, 70);
  this.vivo = 1;
  this.direccion=random(int(-1, 1));
  this.dibujarse = function() {
    if (this.vivo == 1) {
      var mar = dist (this.x, this.y, pez.x, pez.y);
      if (mar<30) {
        this.tamano = this.tamano+1;
      }

      noStroke();
      fill(208, 113, 21);
      ellipse((this.x), (this.y), (this.tamano + 30), this.tamano);
      triangle((this.x - 75), (this.y - 30), (this.x), (this.y), (this.x - 75), (this.y + 30));
      fill(250);
      ellipse((this.x + 20), (this.y - 15), (this.tamano / 2), (this.tamano / 2));
      fill(0);
      ellipse((this.x + 20), (this.y - 15), (this.tamano / 10), (this.tamano / 10));
    }
  }
  this.morirse = function() {
    this.vivo = 0;
  }
  this.moverse = function() {
    if (this.x>800 && this.y>800) {
      this.direccion = (this.direccion * -1)
    }
    if (this.x<0 && this.y<0) {
      this.direccion = (this.direccion * -1)
    }
    this.x = this.x + (-1 * this.direccion);
    this.y = this.y + (-1 * this.direccion);
  }
}
// declaracion de la clase cocodrilo
function cocodrilo() {
  // acciones de la clase cocodrilo
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 70;
  this.vivo = 1;
  this.dibujarse = function() {
    if (this.vivo == 1) {
      var tar = dist (this.x, this.y, pez.x, pez.y);
      if (tar<50) {
        pez.vivo = 0;
      }
      var cer=dist(this.x, this.y, rana.x, rana.y);
      if (cer<50) {
        vida.largo = vida.largo -10;
      }
      noStroke();
      fill(149, 185, 95);
      rect((this.x - 250), (this.y), (this.tamano * 2), (this.tamano));
      rect((this.x - 370), (this.y + 30), (this.tamano * 2), (this.tamano - 20));
      rect((this.x - 370), (this.y - 60), (30), (this.tamano * 2));
      rect((this.x - 370), (this.y - 60), (this.tamano), (this.tamano - 40));
      fill(121, 156, 54);
      rect((this.x - 370), (this.y + 65), (this.tamano - 40), (this.tamano - 40));
      rect((this.x - 270), (this.y + 65), (this.tamano - 40), (this.tamano - 40));
      rect((this.x - 370), (this.y + 30), (this.tamano + 50), (this.tamano - 50));
      fill(250);
      ellipse(((this.x + 20) - 200), (this.y), (this.tamano / 2), (this.tamano / 2));
      ellipse(((this.x - 20) - 200), (this.y), (this.tamano / 2), (this.tamano / 2));
      rect((this.x - 200), (this.y + 30), (this.tamano + 20), (this.tamano / 6));
      fill(0);
      ellipse(((this.x + 20) - 200), (this.y), (this.tamano / 10), (this.tamano / 5));
      ellipse(((this.x - 20) - 200), (this.y), (this.tamano / 10), (this.tamano / 5));
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.morirse = function() {
      this.vivo = 0;
    }
  }
}
