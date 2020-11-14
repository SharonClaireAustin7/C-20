var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 200, 50, 50);
  a.shapeColor="pink";
  b.shapeColor="pink";
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<50&&b.x-a.x<50&&a.y-b.y<50&&b.y-a.y<50){
    a.shapeColor="purple";
    b.shapeColor="purple";
  }
  else{
    a.shapeColor="pink";
    b.shapeColor="pink";
  }   
  drawSprites();
}