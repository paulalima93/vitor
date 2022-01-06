const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1, box2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(200,400,400,5);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

} 

function draw() {
  background("black");  
  Engine.update(engine);

 ground1.display(); 
 box1.display();
 box2.display();

  
  
}
