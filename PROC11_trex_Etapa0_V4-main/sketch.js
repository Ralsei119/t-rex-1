
var trex ,trex_running;
var trex_collided;
var ground,groundImage;
function preload(){
 trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png"); 
trex_collided=loadAnimation ("trex_collided.png");
groundImage=loadAnimation("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5

 //crear sprite de suelo
ground=createSprite(200,180,400,20);
ground.addAnimation("ground",groundImage);
}



function draw(){
  background("white")
  
  //hacer que el t-rex salte al usar barra espaciadora

  if (keyDown("space")){
trex.velocityY=-10;
  }
 trex.velocityY=trex.velocityY+0.8; 
  
 //evitar que el t-rex caiga al infinito

 trex.collide(ground);
  
  
  
  drawSprites();

}
