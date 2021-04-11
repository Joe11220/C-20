var Fcube,Mcube
function setup() {
  createCanvas(800,400);
  Fcube = createSprite(400, 200, 50, 50);
  Fcube.shapeColor = "cyan"
  Mcube = createSprite(600, 200,80, 30);
  Mcube.shapeColor = "violet"
}

function draw() {
  background(0);  
  Mcube.x = World.mouseX
  Mcube.y = World.mouseY
  if(Mcube.x - Fcube.x<Mcube.width/2 + Fcube.width/2
    && Fcube.x - Mcube.x<Mcube.width/2 + Fcube.width/2
    && Fcube.y - Mcube.y<Mcube.height/2 + Fcube.height/2
    && Mcube.y - Fcube.y<Mcube.height/2 + Fcube.height/2){

    Fcube.shapeColor = "violet"
    Mcube.shapeColor = "cyan"
  }
  else{
    Fcube.shapeColor = "cyan"
    Mcube.shapeColor = "violet"
  }
  drawSprites();
}