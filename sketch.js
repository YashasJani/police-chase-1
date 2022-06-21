var thief
var thiefAnimation
var cityBG
var bg
function preload(){
  thiefAnimation=loadAnimation("assets/theif1.png","assets/theif2.png")
  cityBG=loadImage("assets/citybg.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 bg=createSprite(windowWidth/2,windowHeight/7,windowWidth,windowHeight)
 bg.addImage(cityBG)
 bg.velocityX=-3
bg.scale=1.6
thief=createSprite(380,600,50,30)
 thief.addAnimation("running",thiefAnimation)
 thief.scale=0.7
}

function draw() {
  background(0);
  if(bg.x<0){
    bg.x=bg.width/5
  }
  drawSprites()
}
