var game;


window.onload = function(){
	game = new Phaser.Game(600,150,Phaser.AUTO);
	game.state.add("PlayGame", playgame);
	game.state.start("PlayGame");
}

var playgame = function(game){};

playgame.prototype = {
	p1RunCon:false,
	p2RunCon:false,
	framePlayerOne : [1,9,10],
	framePlayerTwo : [12,20,21],

	p1CurrentFrame : 0,
	p2CurrentFrame : 0,


	preload:function(){
		game.load.spritesheet("player", "./assets/spritesheet_player.png", 23,23, 22);
		game.load.image('bg', './assets/runningtrack.png')
		//game.load.spritesheet("player2", "./assets/spritesheet_player.png", 23,23, 22);
		game.scale.pageAlignHorizontally = true;
		game.scale.oageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	
	create:function(){
		game.stage.backgroundColor = "#000000";
		game.add.tileSprite(0, 60, 600, 48, "bg");
		this.playerOne = game.add.sprite(30, 50, "player");
		this.playerTwo = game.add.sprite(30, 75, "player");
		//this.playerOne.animations.add('run', [1,9,10]);
		//this.playerOne.animations.add('idle', [0]);
		//this.playerOne.animations.play('run', 20, true);
		//console.log(this.playerOne.animations.currentAnim);
		//this.playerOne.animations.currentAnim=;

		//this.playerTwo.animations.add('run', [12,20,21]);
		//this.playerTwo.animations.add('idle', [11]);
		this.playerTwo.animations.frame = 11;
		//this.playerTwo.animations.play('run', 20, true);
		var tickRpOne = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		tickRpOne.onDown.add(this.rightMovePlayerOne, this);
		var tickLpOne = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		tickLpOne.onDown.add(this.leftMovePlayerOne, this);

		var tickLpTwo = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		tickLpTwo.onDown.add(this.rightMovePlayerTwo, this);
		var tickRpTwo = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		tickRpTwo.onDown.add(this.leftMovePlayerTwo, this);
	},
	
	update:function(){

	},

	rightMovePlayerOne:function(){
		if(!this.p1RunCon){
			this.p1RunCon = true;
			this.playerOne.x += 1;
			this.p1CurrentFrame++;
			if(this.p1CurrentFrame > 2)this.p1CurrentFrame = 0;
			this.playerOne.animations.frame = this.framePlayerOne[this.p1CurrentFrame];
			//this.playerOne.animations.frame = 1;
		}
	},

	leftMovePlayerOne:function(){
		if(this.p1RunCon){
			this.p1RunCon = false;
			this.playerOne.x += 1;
			this.p1CurrentFrame++;
			if(this.p1CurrentFrame > 2)this.p1CurrentFrame = 0;
			this.playerOne.animations.frame = this.framePlayerOne[this.p1CurrentFrame];
			//this.playerOne.animations.frame = 9;
		}
	},

	rightMovePlayerTwo:function(){
		if(!this.p2RunCon){
			this.p2RunCon = true;
			this.playerTwo.x += 1;
			this.p2CurrentFrame++;
			if(this.p22urrentFrame > 2)this.p1CurrentFrame = 0;
			this.playerTwo.animations.frame = this.framePlayerTwo[this.p2CurrentFrame];
		}
	},

	leftMovePlayerTwo:function(){
		if(this.p2RunCon){
			this.p2RunCon = false;
			this.playerTwo.x += 1;
			this.p2CurrentFrame++;
			if(this.p2CurrentFrame > 2)this.p2CurrentFrame = 0;
			this.playerTwo.animations.frame = this.framePlayerTwo[this.p2CurrentFrame];
		}
	}
}