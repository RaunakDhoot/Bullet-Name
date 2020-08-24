var wall,thickness;
var bullet,speed,weight
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83)
  weight=random(30,52)
  speed=random(223,321)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapecolor = color(80,80,80)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  var bullet = createSprite(200,200,20,20)
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapecolor=color(255,0,0)

    }
    else{
      wall.shapecolor=color(0,128,0)
    }
    
}
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
 {
  return true
 }
 return false;
}

