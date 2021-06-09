// Looks like you the Grim Reaper were not doing your job.

// You are being pluged from heaven and are falling down Earth as a punishment.

// Don't touch the balloons

// Do you have what it takes to survive?

// Heaven won't let you up and you will fall is you go down.

// Thank You For Playing My Game !!!

var PLAY = 1;
var END = 0;
var gameState = 1;

var gameover;
var gameoverImg;

var bg, bgImg;
var redBalloon, redImg;
var blueBalloon, blueImg;
var greenBalloon, greenImg;
var pinkBalloon, pinkImg;

var balloonGroup;

var ghost;
var ghostImg;

var climber;
var climberImg;

var invisible;

var score = 0;

function preload(){
 //load your images here 
 bgImg=loadImage("background0.png")
 blueImg=loadImage("blue_balloon0.png")
 redImg=loadImage("red_balloon0.png")
 greenImg=loadImage("green_balloon0.png")
 pinkImg=loadImage("pink_balloon0.png")
  
 ghostImg=loadImage("ghost-standing.png")
  
 gameoverImg=loadImage("gameover.png")
  
 climberImg=loadImage("climber.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2)
  bg.addImage(bgImg)
  bg.scale = 3
  
  gameover=createSprite(windowWidth/2, windowHeight/2)
  gameover.addImage(gameoverImg);
  
  ghost=createSprite(windowWidth/2+200, windowHeight/2)
  ghost.addImage(ghostImg);
  ghost.scale = 0.4
  
  climber=createSprite(windowWidth/2+200, windowHeight/2+80)
  climber.addImage(climberImg);
  climber.scale = 0.7
  
  invisible = createSprite(windowWidth/2,windowHeight/2+225, windowWidth, 5)
  
  invisible.visible = false;
  
 balloonGroup = new Group();

}

function redBalloon(){
  
  var balloon = createSprite(-10,300);
  balloon.addImage(redImg)
  balloon.velocityX=4;
  balloon.scale = 0.1
  balloon.y = Math.round(random(50,550));
  balloonGroup.add(balloon);
  
  if(ghost.isTouching(balloonGroup)){
    
    gameState = END;
    
  }
  balloon.lifetime = width;
}

function greenBalloon(){
  
  var balloon = createSprite(-10,300);
  balloon.addImage(greenImg)
  balloon.velocityX=4;
  balloon.scale = 0.1
  balloon.y = Math.round(random(50,550));
  balloonGroup.add(balloon);
  
  if(ghost.isTouching(balloonGroup)){
    
    gameState = END;
    
  }
  
  balloon.lifetime = width;
  
}

function blueBalloon(){
  
  var balloon = createSprite(-10,300);
  balloon.addImage(blueImg)
  balloon.velocityX=4;
  balloon.scale = 0.1
  balloon.y = Math.round(random(50,550));
  balloonGroup.add(balloon);
  
  if(ghost.isTouching(balloonGroup)){
    
    gameState = END;
    
  }
  balloon.lifetime = width;
}

function pinkBalloon(){
  
  var balloon = createSprite(-10,300);
  balloon.addImage(pinkImg)
  balloon.velocityX=4;
  balloon.y = Math.round(random(50,550));
  balloonGroup.add(balloon);
  
  if(ghost.isTouching(balloonGroup)){
    
    gameState = END;
    
  }
  balloon.lifetime = width;
}

function draw() {
background("pink");
  
  createEdgeSprites();
  
  ghost.collide(climber)
  
  if(bg.x<0){
    bg.x = 300
  }
  
  if(gameState === PLAY){
    
    bg.velocityX = -3;
    
    gameover.visible = false;
      
  if(keyWentDown("space")){

      ghost.velocityY = -6;
      climber.destroy();

    }
    if(ghost.y < 0){
      
      gameState = END;
      
    }
    
    if(ghost.y>height){
      
      gameState = END;
      
    }

    ghost.velocityY = ghost.velocityY + 0.5;
  
  var select_balloon = Math.round(random(1,4))
  
  if (frameCount%60 === 0){
  switch(select_balloon) {
   case 1: redBalloon();
      break;
   case 2: greenBalloon();
      break;
   case 3: blueBalloon();
      break;
   case 4: pinkBalloon();
      break;
      default: break;
      
  }  
    }
    
    
    }
    
    if(gameState === END){
      
      bg.velocityX = 0;
      
      ghost.destroy();
      
      balloonGroup.destroyEach();
      
      gameover.visible = true;
      
    }
    drawSprites();
  }
  


  

