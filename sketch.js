var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  speed=random(45,70);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
 wall=createSprite(750,200,60,height/2);
 wall.shapeColor=(80,80,80)
 car.velocityX=speed;
 car.shapeColor="red"
 
deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);
if (car.isTouching(wall))
{
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180)
    {

      car.shapeColor=("green");

    }
    if (deformation<180 && deformation>100)
    {

      car.shapeColor=("green");

    }
    if (deformation<100)
    {

      car.shapeColor=("green");

    }
}
  drawSprites();
}