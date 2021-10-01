var runner,runnerImg;
var jungle , jungleImg;
var coin,coinImg;
var edges;
var score=0;

function preload(){
  jungleImg = loadImage("images/jungle 2.gif");
  runnerImg= loadAnimation("images/runner11.png","images/runner22.png","images/runner33.png");
  coinImg= loadImage("images/coin.png");
}
function setup() {
  createCanvas(400,400);

  //creating runner
  runner =  createSprite(50, 360, 20, 20);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.5;
  //creating jungle
  jungle = createSprite(0,0,400,400);
  jungle.addImage(jungleImg);
  jungle.scale=2.7;
}

function draw() {
  background(0);
  jungle.velocityX=-3; 
  
  if(jungle.x<0){
    jungle.x = jungle.width/2;
    }

    runner.depth = jungle.depth;
    runner.depth+=1;  
    
    if(keyDown("space")){
      runner.velocityY=-10;
    }
    runner.velocityY=runner.velocityY+0.5;

    edges=createEdgeSprites();
    runner.collide(edges[3]);

    coins();      
  drawSprites();

}

function coins(){
  if(frameCount%60===0){
    coin=createSprite(400,200,40,10);
    coin.addImage(coinImg);
    coin.velocityX=-3;
    coin.scale=0.1;
    coin.y=Math.round(random(280,120));
    coin.lifetime=134;
    coin.depth=runner.depth;
    runner.depth+=1;
  }

}