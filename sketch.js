var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount =0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
if(allPlayers !==undefined){
  for(var i in allPlayers){
    if(i=="player"+player.index){
      fill("red")
    }
    else{{
      fill("yellow")
    }}
  }
}


function draw(){
}
