
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shinchan,stone,tree,mango;
 var m1,m2,m3,m4,m5,m6,m7,m8;

 function preload()
 {
	 shinchanImg=loadImage("shinchan.jpg")
	 treeImg=loadImage("treefor.jpg")

 }


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(200,200,10,10)
	
    rectMode(CENTER)
	tree=createSprite(500,300,50,50)
	tree.addImage(treeImg)
	tree.scale=2

	
	shinchan=createSprite(200,400,10,10)
	shinchan.addImage(shinchanImg)
	shinchan.scale=0.1
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

 
  stone.display();
 
  
  drawSprites();
 
}



