
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

   ground=new Ground(200,600,400,20)
division1=new Ground(000,450,20,300)
division2=new Ground(080,450,20,300)
division3=new Ground(160,450,20,300)
division4=new Ground(240,450,20,300)
division5=new Ground(320,450,20,300)
division6=new Ground(400,450,20,300)

plinko1=new paper(0,75,10)
plinko2=new paper(50,75,10)
plinko3=new paper(100,75,10)
plinko4=new paper(150,75,10)
plinko5=new paper(200,75,10)
plinko6=new paper(250,75,10)
plinko7=new paper(300,75,10)
plinko8=new paper(350,75,10)
plinko9=new paper(400,75,10)


plinko11=new paper(0,150,10)
plinko12=new paper(50,150,10)
plinko13=new paper(100,150,10)
plinko14=new paper(150,150,10)
plinko15=new paper(200,150,10)
plinko16=new paper(250,150,10)
plinko17=new paper(300,150,10)
plinko18=new paper(350,150,10)
plinko19=new paper(400,150,10)

plinko21=new paper(0,225,10)
plinko22=new paper(50,225,10)
plinko23=new paper(100,225,10)
plinko24=new paper(150,225,10)
plinko25=new paper(200,225,10)
plinko26=new paper(250,225,10)
plinko27=new paper(300,225,10)
plinko28=new paper(350,225,10)
plinko29=new paper(400,225,10)
} 


function draw() {
  background(255,255,255);  
  Engine.update(engine);

a();

  ground.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();

plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();

plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();


  drawSprites();
}

function a(){
 
  var par=[];
  if (frameCount%50===0){
par.push(new parti(random(50,350),10,10))
  }
  for(var j=0; j<par.length; j++){
    par[j].display();
  }
  console.log(par.length)
}