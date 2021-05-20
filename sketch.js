const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var bg;
var bl1, bl2, bl3, bl4
var bl1img,bl2img, bl3img, bl4img
var bgSprite
function preload(){
  bg= loadImage("background.PNG");
  bl1img= loadImage("building1.png");
  bl2img= loadImage("building2.png");
  bl3img= loadImage("building3.png");
  bl4img= loadImage("building4.png");
}

function setup() {
  createCanvas(1800,700);
  
  engine= Engine.create();
  world= engine.world;
 
  bl1=createSprite(20,50, 40,100)
  bl1.addImage(bl1img);

  bgSprite=createSprite(0,0,800,400);
  bgSprite.addImage(bg)
  bgSprite.scale= 10
  bgSprite.velocityX=-5

}

function draw() {
  background("white");
  Engine.update(engine);

  if(bgSprite.x<0){
    bgSprite.x= bgSprite.width/2;
  }

  spawnBuilding()
  drawSprites();
  fill("red")
  text(mouseX+","+mouseY, 870, 40);


}

function spawnBuilding(){
  if(frameCount%100===0){
    var blSprite= createSprite(1000,400);
     var rand= Math.round(random(1,5));
     switch(rand){
       case 1: blSprite.addImage(bl1img);
       break;

       case 2: blSprite.addImage(bl2img);
       break;

       case 3: blSprite.addImage(bl3img);
       break;

       case 4: blSprite.addImage(bl4img);
       break;
     }

     blSprite.velocityX= -10
  }
}


