
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin,dustbinImage;
var world,ground;
var paper;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}
function setup() {

	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(400,400);
	ground = new Ground(width/2,540,width,20);
    dustbin = new Dustbin(1200,500)
	
    Engine.run(engine);
  
}
function draw() {

  rectMode(CENTER);
  background(230);
 
  paper.display();
  ground.display();
  dustbin.display();
  image(dustbinImage,1040,230,300,300);
 
}
function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});

	}
}