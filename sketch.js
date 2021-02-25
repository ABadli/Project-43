var hours, minutes, seconds;




function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);

  
 angleMode(DEGREES); 

 
  
  //console.log("SecAngle = "+secAngle);

}

function draw() {
  background("black");  

  stroke("black");
  fill("white");
  circle(200,200,250);
  translate(200,200);
  rotate(-90);
  hours = hour();
  minutes = minute();
  seconds = second();
  console.log("Hours: "+ hours+" Minutes: " +minutes+" Seconds: "+seconds);

  secAngle = map(seconds,0,60,0,360);
  minAngle = map(minutes,0,60,0,360);
  hourAngle = map(hours,0,60,0,360);

  push();
  rotate(secAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("red");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  noFill();
  stroke("blue");
  arc(0,0,280,280,0,secAngle);

  noFill();
  stroke("red");
  arc(0,0,270,270,0,minAngle);

  noFill();
  stroke("green");
  arc(0,0,260,260,0,hourAngle);

  drawSprites();
}