  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
 //Escribe el código para cargar las imagenes
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("")){
  
      //escribir aquí el código para mover el fantasma a la izquierda al presionar la flecha izquierda
    }
    if(keyDown("")){
  
    
      //escribir aquí el código para mover el fantasma a la derecha al presionar la flecha derecha
      
    }
    if(keyDown("")){
  
   
      //escribir aquí el código para mover el fantasma hacia arriba al presionar la flecha hacia arriba
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escribir una condición para desplazar infinitamente la torre
    
      spawnDoors();

  
      //escribir el código para hacer que climbersGroup colisione con el fantasma y cambiar la velocidad del fantasma  
//escribir aquí el código para hacer que invisibleBlockGroup colisione con el fantasma, destruir el fantasma y cambiar gamestate a end.
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
  }
}

function spawnDoors()
 {
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //agregar la función random
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //cambiar la profundidad del fantasma y de la puerta
    
     

    
    //asignar lifetime a obstacle.lifetime = 300; aquí los obstáculos son la puerta, la barandilla y el bloque invisible


    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle);aquí los obstáculos son la puerta, la barandilla y el bloque invisible
  }
}

