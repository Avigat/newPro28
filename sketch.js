const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, boy, treeImg, tree, engine, world;
var launcherObject;
var launchForce=100;

function preload()
{
	boyImg=loadImage("mangoAssets/boy.png");
	treeImg=loadImage("mangoAssets/tree.png");
}

function setup() {
	var canvas  = createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,650,width,20);
	stoneObj = new Stone(230,400)
	
	boy=createSprite(200,580,20,20)
	boy.addImage(boyImg);
	boy.scale=0.13;

	tree=createSprite(950,340)
	tree.addImage(treeImg);
	tree.scale=0.52;

	m1=new Mango(1000,300,20,20);
	m2=new Mango(900,300,20,20);
	m3=new Mango(950,350,20,20);
	m4=new Mango(940,400,20,20);

	slingshot = new SlingShot(stoneObj.body,{x:200, y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  detectCollision(stoneObj,m1)
  detectCollision(stoneObj,m2)
  detectCollision(stoneObj,m3)
  detectCollision(stoneObj,m4)
  
  drawSprites();

  ground.display();
  stoneObj.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(){

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		launcherObject.attach(stoneObj.body)
	}
}