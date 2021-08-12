var bg1, fruit, vegetable,places,animals,birds;
function preload(){
  bg1= loadImage("bg1.jpg");
}
function setup() {
  createCanvas(800,600);
fruit= createButton("Fruits")
fruit.position(400,200)

vegetable= createButton("Vegetables")
vegetable.position(400,250)

places= createButton("Places")
places.position(400,300)

animals= createButton("Animals")
animals.position(400,350)

birds= createButton("Birds")
birds.position(400,400)
}

function draw() {
  background("yellow"); 
  textSize(30);
  fill("red")
  text("WELCOME! TEST YOUR MEMORY!",150,100) ;
  text("CHOOSE THE CATEGORY",200,150)
  drawSprites();
}