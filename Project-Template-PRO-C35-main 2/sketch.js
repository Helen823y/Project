const WORLD = Matter.World
const BODIES = Matter.Bodies;
const ENGINE = Matter.Engine;

var database, position

var city, Balloon
var balloonPosition
function preload(){
city=loadImage("cityImage.png")
Balloon=loadImage("hotairballoon1.png")
}


function setup(){
createCanvas(800,700)

balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition, showError);
}

function draw(){
if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloonPosition.addAnimation("hotairballoon2.png",balloonImage2)
    balloonPosition.scale=balloon.scale -0.01;

    if(keyDown(DOWN_ARROW)){
        updateHeight(0,10);
        balloonPosition.addAnimation("hotairballoon2.png",balloonImage2)
        balloonPosition.scale=balloon.scale +0.01;
    }
}

updateHeight();
readHeight();
showError();

drawSprite();
}
 function updateHeight(x,y){
     database.ref('balloon/hieght').set({
         'x': updateHeight.x + x,
         'y': updateHeight.y + y
     })
 }

 function readHeight(data){
     height = data.val();
     balloonPosition.x = height.x;
     balloonPosition.y = height.y;
 }

 function showError(){
     console.log("Error in writing to the datadase")
 }