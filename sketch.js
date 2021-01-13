var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  
	starImg = loadImage("star.png");
  
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
  
	bgImg = loadImage("starNight.png");
  
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(600, 600);

	// fairyVoice.play();

	fairy = createSprite(130, 450);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.15;

	star = createSprite(550,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(550 , 30 , 5 , {restitution:0.5, isStatic: true});
  
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  
  background(bgImg);
  
  keyPressed();
  
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(keyDown(LEFT_ARROW)) {
    
    fairy.x = fairy.x - 1;
    
  }
  
  if(keyDown(RIGHT_ARROW)) {
    
    fairy.x = fairy.x + 1;
    
  }
  
  if(starBody.position.y > 430) {
    
    Matter.Body.setStatic(starBody,true);
    
  }
  
  drawSprites();

}

function keyPressed() {
	
  if(keyDown(DOWN_ARROW)) {
    
    Matter.Body.setStatic(starBody,false);
    
  }
  
}
