var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 fixedRect = createSprite(400,100,80,30);
}

function draw() {
  background(255,255,255);  
  console.log(fixedRect.width/2+movingRect.width/2)
  console.log(movingRect.x)
  console.log(fixedRect.x)
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }

  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}