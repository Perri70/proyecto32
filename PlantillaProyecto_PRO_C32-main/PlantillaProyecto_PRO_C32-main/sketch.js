var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;
function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);
  pin1=createSprite(200, 300, 20, 20);
  pin2=createSprite(180, 320, 20, 20);
  pin3=createSprite(220, 320, 20, 20);
  pin4=createSprite(160, 340, 20, 20);
  pin5=createSprite(200, 340, 20, 20);
  pin6=createsprite(240, 340, 20, 20);

  squariad.velocity.y = 0.5;
  squariad.velocity.x =4;
}
   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  drawSprites();
}