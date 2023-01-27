var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  question =  new Question()
}


function draw(){
  background("pink");
  
  question.show()
  drawSprites()
}
