var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200, 800);
  // fixedRect = createSprite(600, 400, 50, 80);
  // fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  // gameObj1 = createSprite(200, 400, 50, 80);
  // gameObj1.shapeColor = "green";

  gameObj2 = createSprite(800, 400, 50, 80);
  gameObj2.shapeColor = "green";

  // gameObj3 = createSprite(800, 400, 50, 80);
  // gameObj3.shapeColor = "green";

  movingRect.velocityX = 5;
  gameObj2.velocityX = -5;
}

function draw() {
  background(0, 0, 0);
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if (isTouching(movingRect, gameObj2)) {
  //   //returns true it will come here
  //   gameObj2.shapeColor = "red";
  //   movingRect.shapeColor = "red";
  // } else {
  //   //if istouching functions returns false
  //   gameObj2.shapeColor = "green";
  //   movingRect.shapeColor = "green";
  // }

  bounceOff(movingRect, gameObj2);
  drawSprites();
}
