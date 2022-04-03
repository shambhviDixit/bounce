
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,right,left,extra,extra1,extra2,ball2,ball1,ball3,ball4;
var ground;
let world;
let engine;




function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;
	var ball_options={

		isStatic:false,
	restitution:0.7,
	friction:0,
	density:1.2
	  }

	  var ball_options1={

		isStatic:true,
	restitution:0,
	friction:0,
	density:3
	  }
	//Create the Bodies Here


ground =new Ground(500,580,1000,10);
ball=Bodies.circle(130,5,20,ball_options);
fill("purple");
ball1=Bodies.circle(80,60,25,ball_options1);
ball2=Bodies.circle(350,100,30,ball_options1);
ball3=Bodies.circle(600,140,35,ball_options1);
ball4=Bodies.circle(850,180,40,ball_options1);


World.add(world,ball);
right = new Ground(600,506,10,140);
left = new Ground(800,506,10,140);
extra = new Ground(1000,350,10,800);
extra1 = new Ground(2,350,10,800);
extra2 = new Ground(500,6,1000,10);
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
	background(0);


  ground.show();
  right.show();
  left.show();
  extra.show();
  extra1.show();
  extra2.show();
ellipse(ball.position.x,ball.position.y,20);
ellipse(ball1.position.x,ball1.position.y,25);
ellipse(ball2.position.x,ball2.position.y,30);
ellipse(ball3.position.x,ball3.position.y,35);
ellipse(ball4.position.x,ball4.position.y,40);
 
drawSprites();


}


function keyPressed(){
if(keyCode === UP_ARROW) {

force();
}
}

function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:3});

}