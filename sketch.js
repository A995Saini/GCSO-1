var car1
var car2
var car3
var car4
var wall


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car1=createSprite(50,200,50,50);
  car2=createSprite(30,150,50,50);
  car3=createSprite(20,100,50,50)
  car4=createSprite(10,90,50,50);
  wall=createSprite(1500,200,60,height/2);
  
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background(255,255,255); 
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;

  drawSprites();
}