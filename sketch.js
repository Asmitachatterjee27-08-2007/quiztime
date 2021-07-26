var canva;
var gameState=0, contestantCount, db, quiz, question , contestant, allContestant;

function setup(){
  canvas = createCanvas(850,400);
  db=firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
