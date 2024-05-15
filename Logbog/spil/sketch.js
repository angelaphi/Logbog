hit1 = 0;
hit2 = 0;
scene=0;

let mSound;
let nSound;
let bsound;

function preload(){
  img = createImg('https://gadekrydset.dk/Games/img/kryds.png','');
	img.hide();
  
  pin = createImg('https://pngimg.com/uploads/madagascar_penguins/small/madagascar_penguins_PNG76.png','');
	pin.hide();
  
   win = createImg('https://pngimg.com/d/madagascar_penguins_PNG26.png','');
	win.hide();
  
  soundFormats('mp3', 'm4a');
  mSound = loadSound('Point Sound.m4a');
  nSound = loadSound('-1 Sound.m4a');
  bSound = loadSound('Background Sound.m4a');
}


function setup(){
  createCanvas(800,800);
  t1=0; t2=0; n=0;
  bSound.play();
}

function draw() {
  if (scene==0){visStart();}
  if (scene==1){visSpil();}
  if (scene==2){visWinner1();}
  if (scene==2){visWinner2();}
}

function timeIngervalRandomNumber() {
	t2=millis();
	if (t2-t1>800){
		t1=t2;
		n=round(random(15));
	}
}

function visStart(){
  background(255,0,0)
  image(pin,0,0,800,800);
  textSize(35);
  text('Tryk ENTER for start',80,200);  
}

function visSpil(){
  background(255,255,255)
  image(img,0,0,800,800);
  textSize(30);
  
let s = 'Player 1: '+hit1;
  fill(255,0,0);
  text(s, 200, 90);
  
let p = 'Player 2: '+hit2;
  fill(255,0,0);
  text(p, 500, 90);

  timeIngervalRandomNumber()

 /*Player 1, bolde (grøn)*/
/*Venstre*/
if (n==0){
  fill(0,255,0)
  ellipse(200,400,100);
}
/*Up*/
if (n==1){
  fill(0,255,0)
  ellipse(400,200,100);
}
/*Højer*/
if (n==2){
  fill(0,255,0)
  ellipse(600,400,100);
}
/*Ned*/
if (n==3){
  fill(0,255,0)
  ellipse(400,600,100);
}

/*Player 2, bolde (lyserød)*/
/*Venstre*/
  if (n==4){
  fill(255,0,255)
  ellipse(200,400,100);
}
/*Up*/
if (n==5){
  fill(255,0,255)
  ellipse(400,200,100);
}
/*Højre*/
if (n==6){
  fill(255,0,255)
  ellipse(600,400,100);
}
/*Ned*/
if (n==7){
  fill(255,0,255)
  ellipse(400,600,100);
}

/*Random bolde (Rød)*/
/*Venstre*/
if (n==8){
  fill(255,0,0)
  ellipse(200,400,100);
}
if (n==12){
  fill(255,0,0)
  ellipse(200,400,100);
}
/*Up*/
if (n==9){
  fill(255,0,0)
  ellipse(400,200,100);
}
if (n==13){
  fill(255,0,0)
  ellipse(400,200,100);
}
/*Højre*/
if (n==10){
  fill(255,0,0)
  ellipse(600,400,100);
}
if (n==14){
  fill(255,0,0)
  ellipse(600,400,100);
}
/*Ned*/
if (n==11){
  fill(255,0,0)
  ellipse(400,600,100);
}
if (n==15){
  fill(255,0,0)
  ellipse(400,600,100);
}
  if(hit1==5||hit2==5){scene=2}
}

function keyPressed(){
  if(keyCode===ENTER){
    scene=1;
  }

  /*Player 1*/
  if (keyCode === LEFT_ARROW && n == 0){
    hit1 += 1;
    mSound.play();
  }
  if (keyCode === LEFT_ARROW && n != 0){
    hit1 -= 1;
    nSound.play();
  }
  if (keyCode === RIGHT_ARROW && n == 2){
    hit1 += 1;
    mSound.play();
  }
  if (keyCode === RIGHT_ARROW && n != 2){
    hit1 -= 1;
    nSound.play();
  }  
  if (keyCode === UP_ARROW && n == 1){
    hit1 += 1;
    mSound.play();
  }
  if (keyCode === UP_ARROW && n != 1){
    hit1 -= 1;
    nSound.play();
  }
  if (keyCode === DOWN_ARROW && n == 3){
    hit1 += 1;
    mSound.play();
  }
  if (keyCode === DOWN_ARROW && n != 3){
    hit1 -= 1;
    nSound.play();
  }  
  
  /*Player 2*/
  if (keyCode === 65 && n == 4){
    hit2 += 1;
    mSound.play();
  }
  if (keyCode === 65 && n != 4){
    hit2 -= 1;
    nSound.play();
  }
  if (keyCode === 68 && n == 6){
    hit2 += 1;
    mSound.play();
  }
  if (keyCode === 68 && n != 6){
    hit2 -= 1;
    nSound.play();
  }  
  if (keyCode === 87 && n == 5){
    hit2 += 1;
    mSound.play();
  }
  if (keyCode === 87 && n != 5){
    hit2 -= 1;
    nSound.play();
  }
  if (keyCode === 83 && n == 7){
    hit2 += 1;
    mSound.play();
  }
  if (keyCode === 83 && n != 7){
    hit2 -= 1;
    nSound.play();
  }  
}

function visWinner1(){
  if(hit1==5){
    background(255,0,0)
    image(win,0,0,800,800);
    textSize(55);
    text('Winner player 1',220,350); 
  }
}

function visWinner2(){
  if(hit2==5){
    background(255,0,0)
    image(win,0,0,800,800);
    textSize(55);
    text('Winner player 2',220,350); 
  }
}