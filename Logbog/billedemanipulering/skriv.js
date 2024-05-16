let img;

function preload(){
  img = loadImage('mps.jpg');
}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(2*w,h);
  noStroke();
  img.loadPixels();
}

function draw(){
  ownFilter();
  image(img,w,0);
}


function ownFilter(){
    let rodfarve = (map(mouseX-(windowWidth/2) , 0, 2*w, 0,1.2));
    let blofarve = (map(mouseY-(windowHeight/2), 0, 2*w, 0,1.2));
    let gronfarve = (rodfarve*(-1));


  for (let i=0;i<w; i += 1){
    for (let j=0;j<h; j += 1){

      /*
      Linjen der siger (getPixelValue(2,i,j) er en koresponden for den farve plads den står på,
      der hvor der tidligere bare har stået et tal.
      Hvis man laver et gennem snit af farverne ved at dividere med 3, giver det en grå
      For at lave et invers billede, tager man den højeste værdi 255 - (getPixelValue(0,i,j),
      fordi så bliver de lyse farver mørke og omvendt. 
      */

      fill((getPixelValue(0,i,j)*rodfarve),(getPixelValue(1,i,j)*gronfarve),(getPixelValue(2,i,j)*blofarve));
      rect(i,j,1,1);
    }
  }
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
