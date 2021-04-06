const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon;
var ground,platform;
var slingShot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,590,1200,20);
    platform = new Ground(600,480,300,20);
    block1 = new Box(506,476,46,46,"blue");
    block2 = new Box(551,476,46,46,"blue");
    block3 = new Box(595,476,46,46,"blue");
    block4 = new Box(639,476,46,46,"blue");
    block5 = new Box(683,476,46,46,"blue");
    block6 = new Box(551,430,46,46,"green");
    block7 = new Box(595,430,46,46,"green");
    block8 = new Box(639,430,46,46,"green");
    block9 = new Box(595,384,46,46,"pink");

    polygon = new Polygon(300,450,40);
    slingShot = new SlingShot(polygon.body,{x:270,y:450});


}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    platform.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    polygon.display();
    slingShot.display();
}   

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}