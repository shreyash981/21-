var fixedrect;
var movingrect;
function setup() {
  createCanvas(800, 400);
  //createSprite(400, 200, 50, 50) ;
  fixedrect = createSprite(200, 200, 80, 50);
  movingrect = createSprite(350, 200, 50, 80);
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}

function draw() {

  background(255, 255, 255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  // console.log(movingrect.x - fixedrect.x);
  if (IsTouching(movingrect , fixedrect )) {
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }
  else {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";

  }
  drawSprites();


}

