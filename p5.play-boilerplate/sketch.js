function setup() {
  createCanvas(800,400);
  ground1  = new ground(0,390,1600,10);
  body = new tanker(50,350,80,80);
  mouth = new tanker(130,325,100,20);
}

function draw() {
  background("black");  
  ground1.display();
  body.display();
  mouth.display();
  drawSprites();
  KeyPressed();
}
 
function shoot(){
  if(frameCount%200 === 0){
    bullets = createSprite(130,325,20,20);
    bullets.velocityX = 3;
  }


}
function KeyPressed(){
  if(keyCode === 32){
    shoot();
  }
}