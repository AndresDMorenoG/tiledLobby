const config ={
	width:800,
	height:600,
	parent:"container",
	type: Phaser.AUTO,
	physics: {
        default: 'arcade',
        arcade: { 
			debug: true,
			gravity: { y: 0 } }
    },
	scene:[escenaLobby, minGame1, minGame2, minGame3]
}


var game = new Phaser.Game(config);

//Inicio del juego
var con = 6;