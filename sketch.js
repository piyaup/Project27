const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;
    bob1 = new Bob(250,500,50);
    bob2 = new Bob(300,500,50);
    bob3 = new Bob(350,500,50);
    bob4 = new Bob(400,500,50);
    bob5 = new Bob(450,500,50);
    roof = new Roof(350,200,350,20);
    rope1 = new Rope(bob1.body,{x:250,y:200});
    rope2 = new Rope(bob2.body,{x:300,y:200});
    rope3 = new Rope(bob3.body,{x:350,y:200});
    rope4 = new Rope(bob4.body,{x:400,y:200});
    rope5 = new Rope(bob5.body,{x:450,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-80})

    }
  }