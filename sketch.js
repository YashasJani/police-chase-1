var thief
var thiefAnimation
var cityBG

function preload(){
  thiefAnimation=loadAnimation("assets/theif1.png","assets/theif2.png")
  cityBG=loadImage("assets/citybg.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 thief=createSprite(380,600,50,30)
 thief.addAnimation("running",thiefAnimation)
 thief.scale=0.7
}

function draw() {
  background(cityBG);
  drawSprites()
}