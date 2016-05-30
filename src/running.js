var game;


window.onload = function(){
	game = new Phaser.Game(600,150,Phaser.AUTO);
	game.state.add("PlayGame", playgame);
	game.state.start("PlayGame");
}

var playgame = function(game){};

playgame.prototype = {
	preload:function(){
		game.load.spritesheet("player", "./assets/spritesheet_player.png", 23,23, 22);
		game.scale.pageAlignHorizontally = true;
		game.scale.oageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	
	create:function(){
		game.stage.backgroundColor = "#000000";
		this.player = game.add.sprite(30, 100, "player");
		//this.player2 = game.add.sprite
	},
	
	update:function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			this.player.x +=2;
		}
	}
}