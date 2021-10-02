var rocket,rocketImg;
var space;
var star;
var Score=0;
var starGroup;
var meteor;
var meteorImg;
var meteorGroup;

function preload(){
rocketImg=loadImage("Rocket.png");
space=loadImage("Space2.png");
starImg=loadImage("star.png");
meteorImg=loadImage("meteor.png");
}

function setup() {
    starGroup=new Group();
meteorGroup=new Group();

    createCanvas(600,600);

 rocket=createSprite(270,400,20,20);
 rocket.addImage(rocketImg);
 rocket.scale=0.2;

 rocket.debug=false;
 rocket.setCollider("rectangle",0,0,350,900);
}

function draw() {
background(space);

if(keyDown(RIGHT_ARROW)){
rocket.x=rocket.x+4
}

if(keyDown(LEFT_ARROW)){
    rocket.x=rocket.x-4
    }
    


    if(space.y>400){
space.y=300;
    }
  
if(starGroup.isTouching(rocket)){
starGroup.destroyEach();
}



drawSprites();

if(meteorGroup.isTouching(rocket)){
    textSize(14);
    fill("yellow");
    text("YOU LOSE!!",250,250,200,200)
meteorGroup.destroyEach();
starGroup.destroyEach();
background(white);
}


createstar();

createmeteor();

}

function createstar(){
if(frameCount%160===0){
star=createSprite(200,50,30,30);
star.x=Math.round(random(100,500));
star.addImage(starImg);
star.scale=0.1
star.velocityY=2;
starGroup.add(star);
}

}

function createmeteor()
{
if(frameCount%120===0){
meteor=createSprite(200,50,30,30);
meteor.x=Math.round(random(100,500));
meteor.addImage(meteorImg);
meteor.scale=0.1;
meteor.velocityY=2;
meteorGroup.add(meteor)
}
}