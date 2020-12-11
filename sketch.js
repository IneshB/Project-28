const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var tree,stone,ground,launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var boy;
var launchingForce = 100;

function preload()
{
	boy = loadImage("Images/boy.png");	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(235,420,30);
	tree = new Tree(950, 600);
	ground = new Ground(width/2,600,width,20);
	launcher = new Launcher(stone.body, {x: 235, y: 420});

	mango1 = new Mango(900,100,30);
	mango2 = new Mango(940,100,30);
	mango3 = new Mango(980,100,30);
	mango4 = new Mango(900,180,30);
	mango5 = new Mango(940,180,30);
	mango6 = new Mango(980,180,30);
	mango7 = new Mango(1020,180,30);
	mango8 = new Mango(860,260,30);
	mango9 = new Mango(900,260,30);
	mango10 = new Mango(950,260,30);
	mango11 = new Mango(1000,260,30);
	mango12 = new Mango(1050,260,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy,200,340,200,350);

  ground.display();
  tree.display();
  stone.display();
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);

  fill("pink");
  textSize(40);
  text("Press space to play again", 50, 200);

  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Body.setPosition(stone.body, {x: 235, y: 420});
		launcher.attach(stone.body);
	}
}

function detectCollision(s,m){
	var mPos = m.body.position;
	var sPos = s.body.position;
	var distance = dist(sPos.x, sPos.y, mPos.x, mPos.y);

	if (distance <= m.radius + s.radius){
		Body.setStatic(m.body, false);
	}
}