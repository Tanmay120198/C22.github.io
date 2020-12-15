const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var Goption = {
    isStatic: true
  }
  var Boption = {
    restitution:2.4
  }



  ground = Bodies.rectangle(400,300,400,50,Goption);
  World.add(myWorld, ground);
  console.log(ground.position.x);
  
  ball = Bodies.circle(400,200,50,Boption);
  World.add(myWorld, ball);

}

function draw() {
  Engine.update(myEngine);
  var pos = ground.position;
  var Bpos = ball.position;

  background(0);  
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Bpos.x,Bpos.y,20,20);

}