Menu = function(game){}

Menu.prototype = {
	create:function(){
		this.bgWelcome = this.add.sprite(0,0,'bgWelcome');

		this.startButton = this.add.sprite(0,0,'WelcomePlay');
		this.startButton.anchor.setTo(0.5);
		this.startButton.x = this.game.world.width - this.startButton.width;
		this.startButton.y = this.game.world.height - this.startButton.height;

		this.About = this.add.sprite(0,0,'welcomeAbout');
		this.About.anchor.setTo(0.5);
		this.About.x = this.game.world.centerX;
		this.About.y = this.game.world.height - this.About.height;

		this.WelcomeHero = this.add.sprite(0,0,'WelcomeHero');
		this.WelcomeHero.anchor.setTo(0.5);
		this.WelcomeHero.x = this.WelcomeHero.width/2;
		this.WelcomeHero.y = this.game.world.height - this.WelcomeHero.height/2;	

		this.WelcomeTitle = this.add.sprite(0,0,'WelcomeTitle')
		this.WelcomeTitle.anchor.setTo(0.5);
		this.WelcomeTitle.x = this.game.world.centerX;
		this.WelcomeTitle.y = this.WelcomeTitle.height/2;
		
		this.startButton.inputEnabled = true;
		this.startButton.events.onInputDown.add(this.goGame,this);
	},
	goGame:function(){
		this.state.start("Game")
	}
}