var db;
var form;
var gameState = 0;
var playerCount;
var player, game;
var allPlayers = [];

function setup(){
    db = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    //form.display();
    if (playerCount === 4) {
        game.update(1);
    }
    if  (gameState === 1) {
        clear();
        game.play();
    }
}