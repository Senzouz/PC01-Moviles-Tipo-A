Preload = function(game){}

Preload.prototype = {
	preload:function(){

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.scale.pageAlignHorizontally = true;
	    this.scale.pageAlignVertically = true;

	    this.load.image("bgLayer1","assets/bgLayer1.png");
	    this.load.image("bgWelcome","assets/bgWelcome.jpg");
	    this.load.spritesheet("candy","assets/candy.png",82,98,5);
	    this.load.image("GameOver","assets/gameover.png");
	    this.load.spritesheet("hero","assets/hero.png",155,77,12);
	    this.load.image("loadingBar","assets/loading-bar.png");
	    this.load.image("welcomeAbout","assets/welcome_aboutButton.png");
	    this.load.image("WelcomeHero","assets/welcome_hero.png");
	    this.load.image("WelcomePlay","assets/welcome_playButton.png");
	    this.load.image("WelcomeTitle","assets/welcome_title.png");


	},
	create:function(){
		this.state.start("Menu");
	}
}