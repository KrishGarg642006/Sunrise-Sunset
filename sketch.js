const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
    getBackgroundImg()
}

   


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response =  await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")   ;
    var responseJSON=await response.json();
   
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
   
    if(hour>=3 && hour<=5)
    {
       bg="sunrise1.png";
      
    }
    if(hour>5 && hour<=6)
    {
      
       bg="sunrise2.png";
    }
    if(hour>7 && hour<=8)
    {
      
       bg="sunrise3.png";
    }
    if(hour>8 && hour<=9)
    {
      
       bg="sunrise4.png";
    }
    if(hour>10 && hour<=11)
    {
      
       bg="sunrise5.png";
    }
    if(hour>11 && hour<=12)
    {
      
       bg="sunrise6.png";
    }
    if(hour>18 && hour<=19)
    {
      
       bg="sunrise8.png";
    }
    if(hour>19 && hour<=20)
    {
      
       bg="sunrise9.png";
    }
    if(hour>20 && hour<=21)
    {
      
       bg="sunrise10.png";
    }
    if(hour>21 && hour<=22)
    {
      
       bg="sunrise11.png";
    }
    if(hour>23 && hour<=24)
    {
      
       bg="sunrise9.png";
    }
   backgroundImg=loadImage(bg)
   
   
   }


    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


