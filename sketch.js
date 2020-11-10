const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload()
{
	backgroundImg = loadImage("sky.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	stone = new Stone(400,350);
	obstacle = new Obstacle(600,200);
	target = new Target(600,600);
	catapult = new Catapult(stone.body, {x:200, y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  ground.display();
  catapult.display();
  stone.display();
  obstacle.display();
  target.display();
  drawSprites();
}



