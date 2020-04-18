GameOver = function(game){}
GameOver.prototype = {
	create:function(){
		this.bgLayer1 = this.add.sprite(0,0,'bgLayer1');

		this.gameover = this.add.sprite(0,0,'GameOver');
		this.gameover.anchor.setTo(0.5);
		this.gameover.x = this.game.world.centerX;
		this.gameover.y = this.gameover.height/2;

		this.startButton = this.add.sprite(0,0,'WelcomePlay');
		this.startButton.anchor.setTo(0.5);
		this.startButton.x = this.game.world.width - this.startButton.width;
		this.startButton.y = this.game.world.height - this.startButton.height;

		this.startButton.inputEnabled = true;
		this.startButton.events.onInputDown.add(this.goMenu,this);
	},
	goMenu:function(){
		this.state.start("Menu")
	}
}