
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myengine,myworld
var  bound
var catch1
var catch2
var catch3
var paper
function preload()
{
	
}





function setup() {
	createCanvas(800, 700);

  myengine=Engine.create();
  myworld=myengine.world
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bound=createSprite(0,600,10000,10)
  bound.shapeColor="yellow"

  catch1=createSprite(600,575,10,50)
  catch1.shapeColor="red"

  catch2=createSprite(700,575,10,50)
  catch2.shapeColor="red"

  catch3=createSprite(650,600,100,10)
  catch3.shapeColor="red"

  paper=new Paper(200,300,45,54)
  
  
  
	Engine.run(engine);
 

}
function draw() {
  
  Engine.update(myengine)
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  paper.display();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(PaperBody,PaperBody.body.position,{x:85,y:-85})
  }
}



