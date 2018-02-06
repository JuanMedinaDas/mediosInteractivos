var positionx =0;
	var positiony =0;
	var red  = 0;
	var green = 0;
	var blue = 0 ;
function setup() { 
	//metodo de cuadricula
  noStroke();
  createCanvas(657, 511);
	background(211,197,170);
for (var numFila= 0; numFila < 2; numFila = numFila + 1 )
	 {
		for (var numHilera = 0; numHilera < 8; numHilera = numHilera + 1) {
			fill(211,197,170);
			rect(positionx, positiony, 82, 252);
			positionx = positionx +82;
		}
		positiony = positiony+252;
	 	positionx = 0;
}
	//metodo para patron1
	positionx= 4;
	positiony= 4;
  
  for (var casillasx= 0; casillasx<2;casillasx=casillasx+1)
{
	for(var casillasy=0;casillasy<2;casillasy=casillasy+1)
	{
		fill(0);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 4;
 // final del metodo patron1
}
  //metodo para patron2
	noStroke();
  positionx= 83;
	positiony= 0;
for (var recuadrosy= 0; recuadrosy<6;recuadrosy=recuadrosy+1)
{
  fill(190,64,42);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 83;
}
  positionx= 83;
	positiony= 21;
  for (var recuadrosy2= 0; recuadrosy2<6;recuadrosy2=recuadrosy2+1)
{
  fill(212,197,164);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 83;
 // final del metodo patron2
}
	//figura 1 patron 1
	positionx= 250;
	positiony= 4;
for (var casillasx1= 0; casillasx1<2;casillasx1=casillasx1+1)
{
	for(var casillasy1=0;casillasy1<2;casillasy1=casillasy1+1)
	{
		fill(0);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 249;	
}
	//final figura1 patron 1
	//figura 2 patron 1
	positionx= 414;
	positiony= 4;
for (var casillasx2= 0; casillasx2<2;casillasx2=casillasx2+1)
{
	for(var casillasy2=0;casillasy2<2;casillasy2=casillasy2+1)
	{
		fill(0);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 414;	
}
	//final figura2 patron 1
//figura1 para patron2
	noStroke();
  positionx= 165;
	positiony= 0;
for (var recuadrosy3= 0; recuadrosy3<6;recuadrosy3=recuadrosy3+1)
{
  fill(46,40,37);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 165;
}
  positionx= 165;
	positiony= 21;
  for (var recuadrosy4= 0; recuadrosy4<6;recuadrosy4=recuadrosy4+1)
{
  fill(194,179,148);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 165;
 // final del figura1 patron2
}
   //metodo figura 2 patron2
	noStroke();
  positionx= 329;
	positiony= 0;
for (var recuadrosy5= 0; recuadrosy5<6;recuadrosy5=recuadrosy5+1)
{
  fill(46,40,37);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 329;
}
  positionx= 329;
	positiony= 21;
  for (var recuadrosy6= 0; recuadrosy6<6;recuadrosy6=recuadrosy6+1)
{
  fill(194,179,148);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 329;
}//final figuraa2 patron 2
  
     //metodo figura 3 patron2
	noStroke();
  positionx= 575;
	positiony= 0;
for (var recuadrosy7= 0; recuadrosy7<6;recuadrosy7=recuadrosy7+1)
{
  fill(46,40,37);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 575;
}
  positionx= 575;
	positiony= 21;
  for (var recuadrosy8= 0; recuadrosy8<6;recuadrosy8=recuadrosy8+1)
{
  fill(194,179,148);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 575;
}//final figuraa3 patron 2
   //figura 4 patron2
	noStroke();
  positionx= 493;
	positiony= 0;
for (var recuadrosy9= 0; recuadrosy9<6;recuadrosy9=recuadrosy9+1)
{
  fill(190,64,42);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 493;
}
  positionx= 493;
	positiony= 21;
  for (var recuadrosy10= 0; recuadrosy10<6;recuadrosy10=recuadrosy10+1)
{
  fill(212,197,164);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 493;
 // final de figura 4 patron2
}
  //final de la primera fila
  //inicio segunda fila
 //figura 5 patron2
	noStroke();
  positionx= 1;
	positiony= 253;
for (var recuadrosy11= 0; recuadrosy11<6;recuadrosy11=recuadrosy11+1)
{
  fill(190,64,42);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 1;
}
  positionx= 1;
	positiony= 253;
  for (var recuadrosy12= 0; recuadrosy12<6;recuadrosy12=recuadrosy12+1)
{
  fill(191,62,40);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 1;
 // final de figura 5 patron2 
  
} 
   //figura 6 patron2
	noStroke();
  positionx= 83;
	positiony= 253;
for (var recuadrosy13= 0; recuadrosy13<6;recuadrosy13=recuadrosy13+1)
{
  fill(46,40,37);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 83;
}
   positionx= 83;
	positiony= 274;
  for (var recuadrosy14= 0; recuadrosy14<6;recuadrosy14=recuadrosy14+1)
{
  fill(194,179,148);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 83;
 // final de figura 6 patron2 
  
} 
  //figura 4 patron 1
  fill(1);
	rect(165,253,81,252);
  positionx= 169;
	positiony= 256;
  
  for (var casillas4x= 0; casillas4x<2;casillas4x=casillas4x+1)
{
	for(var casillas4y=0;casillas4y<2;casillas4y=casillas4y+1)
	{
		fill(212,197,164);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 169;
 // final del figura 4 patron 1
}
     //figura 7 patron2
	noStroke();
  positionx= 247;
	positiony= 253;
for (var recuadrosy15= 0; recuadrosy15<6;recuadrosy15=recuadrosy15+1)
{
  fill(191,62,40);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 247;
}
   positionx= 247;
	positiony= 274;
  for (var recuadrosy16= 0; recuadrosy16<6;recuadrosy16=recuadrosy16+1)
{
  fill(212,197,164);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 247;
 // final de figura 6 patron2 
  
} 
    //figura 5 patron 1
  fill(1);
	rect(329,253,81,252);
  positionx= 332;
	positiony= 256;
  
  for (var casillas5x= 0; casillas5x<2;casillas5x=casillas5x+1)
{
	for(var casillas5y=0;casillas5y<2;casillas5y=casillas5y+1)
	{
		fill(212,197,164);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 332;
 // final del figura 5 patron 1
}
       //figura 7 patron2
	noStroke();
  positionx= 411;
	positiony= 253;
for (var recuadrosy17= 0; recuadrosy17<6;recuadrosy17=recuadrosy17+1)
{
  fill(191,62,40);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 411;
}
   positionx= 411;
	positiony= 274;
  for (var recuadrosy18= 0; recuadrosy18<6;recuadrosy18=recuadrosy18+1)
{
  fill(212,197,164);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 411;
 // final de figura 7 patron2 
  
} 
       //figura 8 patron2
	noStroke();
  positionx= 493;
	positiony= 253;
for (var recuadrosy19= 0; recuadrosy19<6;recuadrosy19=recuadrosy19+1)
{
  fill(46,40,37);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 493;
}
   positionx= 493;
	positiony= 274;
  for (var recuadrosy20= 0; recuadrosy20<6;recuadrosy20=recuadrosy20+1)
{
  fill(194,179,148);
	rect(positionx, positiony, 81, 21);
	positiony = positiony+42;
	 	positionx = 493;
 // final de figura 8 patron2 
  
} 
      //figura 6 patron 1
  fill(1);
	rect(574,253,81,252);
  positionx= 578;
	positiony= 256;
  
  for (var casillas6x= 0; casillas6x<2;casillas6x=casillas6x+1)
{
	for(var casillas6y=0;casillas6y<2;casillas6y=casillas6y+1)
	{
		fill(212,197,164);
			rect(positionx, positiony, 34, 120);
			positionx = positionx +40;
	}
	positiony = positiony+124;
	 	positionx = 578;
 // final del figura 6 patron 1
}
  //fin de la fila

}
//fin