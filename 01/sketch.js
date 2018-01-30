function setup() { 
createCanvas(561,426);   // TamaÒo papel
background(220,208,182);   // Color papel
strokeWeight(0);   // TamaÒo pincel
fill(214,214,214);   // Color del relleno
rect(227, 92, 45, 47); 
strokeWeight(5);   // TamaÒo pincel
fill(245,228,156);   // Color del relleno
rect(234, 99, 35, 32);   // Dibujar rect·ngulo 1
strokeWeight(3);
	fill(220,208,182);
	beginShape();   // Iniciar una figura 1
vertex(563,40);   // Crear un vertice
vertex(6,332);
vertex(62,428);
vertex(163,428);
vertex(120,347);
vertex(563,114);	
endShape(CLOSE);   // figura 1 cerrado
line(26,361,562,80);   // Dibujar linea1
line(33,318,98,428);   // Dibujar linea2
	strokeWeight(2);
line(115,277,175,354);   // Dibujar linea3
line(151,259,226,327);   // Dibujar linea4
line(63,302,139,428);   // Dibujar linea5
fill(242,237,241);
ellipse(488,281,75);   // Dibujar una elipse	
	strokeWeight(3);
fill(216,179,88,100);
ellipse(106,291,138,138);   // Dibujar una elipse
	strokeWeight(0);   // TamaÒo pincel
fill(221,20,151,100);   // Color del relleno
rect(0,294, 80, 80);   // Dibujar rect·ngulo 2
	strokeWeight(2)
	fill(220,208,182,0); 
beginShape();   // Iniciar una figura 2
vertex(57,416);   // Crear un vertice
vertex(349,263);
vertex(365,290);
vertex(130,413);
vertex(102,428);
vertex(64,428);	
endShape(CLOSE);   // figura 2 cerrado
	
	//figuras relleno
strokeWeight(1)
	fill(111,110,118); 
beginShape();   // Iniciar una figura 4
vertex(448,138);   // Crear un vertice
vertex(431,108);
vertex(468,90);
vertex(486,120);
endShape(CLOSE);   // figura 2 cerrado
	strokeWeight(1)
	fill(111,110,118); 
beginShape();   // Iniciar una figura 5
vertex(301,177);   // Crear un vertice
vertex(262,198);
vertex(284,225);
vertex(321,206);
endShape(CLOSE);   // figura 2 cerrado
		fill(11,11,13); 
beginShape();   // Iniciar una figura 6
vertex(428,185);   // Crear un vertice
vertex(447,214);
vertex(415,232);
vertex(399,202);
endShape(CLOSE);   // figura 2 cerrado
	
	beginShape();   // Iniciar una figura 7
vertex(419,269);   // Crear un vertice
vertex(394,282);
vertex(410,302);
vertex(433,285);
endShape(CLOSE);   // figura 2 cerrado
	
		beginShape();   // Iniciar una figura 8
vertex(412,322);   // Crear un vertice
vertex(439,305);
vertex(456,334);
vertex(428,353);
endShape(CLOSE);   // figura 2 cerrado
	
		
		beginShape();   // Iniciar una figura 9
vertex(307,287);   // Crear un vertice
vertex(348,264);
vertex(366,288);
vertex(320,314);
endShape(CLOSE);   // figura 2 cerrado
			
	beginShape();   // Iniciar una figura 10
vertex(35,318);   // Crear un vertice
vertex(65,302);
vertex(81,333);
vertex(52,347);
endShape(CLOSE);   // figura 2 cerrado
	
	beginShape();   // Iniciar una figura 10
vertex(67,378);   // Crear un vertice
vertex(95,359);
vertex(113,387);
vertex(85,404);
	vertex(100,428);   // Crear un vertice
vertex(64,428);
vertex(57,415);
vertex(81,404);
endShape(CLOSE);   // figura 2 cerrado
		
//triangulo		
strokeWeight(1)
	fill(192,130,93); 
beginShape();   // Iniciar una figura 5
vertex(166,428);   // Crear un vertice
vertex(148,404);
vertex(513,209);
endShape(CLOSE);   // figura 2 cerrado
	
//elipses
	strokeWeight(0.2)//elipse1
	fill(178,132,158);
ellipse(348,363,84);   // Dibujar una elipse	
	strokeWeight(0.2)//elipse2
	fill(202,38,26,100);
ellipse(352,368,94);   // Dibujar una elipse	

	strokeWeight(0.2)//elipse2
	fill(128,169,213,200);
ellipse(348,247,84);   // Dibujar una elipse	
	strokeWeight(0.2)//elipse3
	fill(210,194,106,100);
ellipse(348,247,94);   // Dibujar una elipse	
}
