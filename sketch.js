var box
function setup() {
  createCanvas(600,600);
  box=createSprite(200,200,40,40);
}

function draw() 
{
  background("blue");
  if (keyIsDown(RIGHT_ARROW)){
box.x+=5
  }
    if (keyIsDown(LEFT_ARROW)){
box.x-=5
  }
    if (keyIsDown(UP_ARROW)){
box.y-=5
  }
    if (keyIsDown(DOWN_ARROW)){
box.y+=5
  }
drawSprites();
}




