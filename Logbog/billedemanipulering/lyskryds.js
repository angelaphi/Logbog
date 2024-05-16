let img; /*Definere variabel img, så den kan bruges senere*/

function preload(){ /*Preloader billledet så det ikke skal gøre seneres,så det går hurtigere*/
  img = loadImage('vings.jpeg');
}

function setup(){
  w = img.width; //definerer w til at være billedbredden
  h = img.height; //definerer h til at være billedhøjden
  createCanvas(2*w,h); //laver en canvas
  noStroke(); //Fjerner rammen (border)
  img.loadPixels(); //Loader pixelværdierne i en lang liste ([R,G,B,a])
}

function draw(){
  ownFilter(); // Køre function under der heddder ownFilter
  image(img,w,0); //indsætter billedet på canvas
}


function ownFilter(){
    let rodfarve = (map(mouseX-(windowWidth/2) , 0, 2*w, 0,1.2)); //definerer variablen til at være musens position. 
    //-0.5 bredde for at flytte origo.
    let blofarve = (map(mouseY-(windowHeight/2), 0, 2*w, 0,1.2)); // Laver variebel, definerer den til at
    // passe med mousen + window hight / wiiht. 
    // Laver og intrvalllet til 0,1.2 så programet kører hurtigere.
    let gronfarve = (rodfarve*(-1)); //Definerer variablen ligesom ovenstående, 
    // sætter -1 ind så det er den modsatte af den rodfarve. 


  for (let i=0;i<w; i += 1){ //kører alle pixelværdierne igennem på x-aksen, laver +=1 for at få at rykke vider
    for (let j=0;j<h; j += 1){ //kører alle pixelværdierne igennem på y-aksen

      /*
      Linjen der siger (getPixelValue(2,i,j) er en koresponden for den farve plads den står på,
      der hvor der tidligere bare har stået et tal.
      Hvis man laver et gennem snit af farverne ved at dividere med 3, giver det en grå
      For at lave et invers billede, tager man den højeste værdi 255 - (getPixelValue(0,i,j),
      fordi så bliver de lyse farver mørke og omvendt. 
      */

      fill((getPixelValue(0,i,j)*rodfarve),(getPixelValue(1,i,j)*gronfarve),(getPixelValue(2,i,j)*blofarve));
      rect(i,j,1,1); // Sætter filter (filler hver pixel med bestmte farve)
      //på hvert pixel på billede til venstre 
    }
  }
}


function getPixelValue(n,i,j){ //Denne funktion der giver os pixelværdierne som vi bruger over
  p = img.pixels[(i+w*j)*4+n];//får pixelværdierne 
  return p;
}
