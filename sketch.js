
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,380,1200,20)

	log = new Log(300,600,10,80);
	log.shapeColor="red";
    

    log2 = new Log(450,600,10,80);
	log2.shapeColor="red";
   
    log3 = new Log(375,650,150,10);
	log3.shapeColor="red";
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  drawSprites();
  ground.display();
  log.display();
  log2.display();
  log3.display();
}



