var game;


window.onload = function(){
	game = new Phaser.Game(600,150,Phaser.AUTO);
	game.state.add("PlayGame", playgame);
	game.state.start("PlayGame");
}

var playgame = function(game){};

playgame.prototype = {
	p1RunCon:false,

	preload:function(){
		game.load.spritesheet("player", "./assets/spritesheet_player.png", 23,23, 22);
		game.load.spritesheet("player2", "./assets/spritesheet_player.png", 23,23, 22);
		game.scale.pageAlignHorizontally = true;
		game.scale.oageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	
	create:function(){
		game.stage.backgroundColor = "#000000";
		this.player = game.add.sprite(30, 100, "player");
		this.playerTwo = game.add.sprite(30, 50, "player2");
		this.playerTwo.animations.add('run');
		this.playerTwo.animations.play("run", 30, true);
		var tickRpOne = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		tickRpOne.onDown.add(this.rightMovePlayerOne, this);
		var tickLpOne = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		tickLpOne.onDown.add(this.leftMovePlayerTwo, this);
		//this.player2 = game.add.sprite
	},
	
	update:function(){

	},

	rightMovePlayerOne:function(){
		if(!this.p1RunCon){
			this.p1RunCon = true;
			this.player.x += 1;
		}
	},

	leftMovePlayerTwo:function(){
		if(this.p1RunCon){
			this.p1RunCon = false;
			this.player.x += 1;
		}
	}
}