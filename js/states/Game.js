Game = function(game){}
Game.prototype = {
	create:function(){
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 1000;
		this.jumpForce = -200;

		this.bgLayer1 = this.add.sprite(0,0,'bgLayer1');

		this.candies = this.add.group();
		this.candies.setAll('body.allowGravity',false);
		this.candies.setAll('body.immovable',false);

		this.spawnCandy = 0;



		this.createHero();
	},

	createHero:function(){
		this.hero = this.game.add.sprite(0,0,'hero',1);
		this.hero.x = this.hero.width/2;
		this.hero.y = this.game.height/2;
		this.hero.anchor.setTo(0.5);

		this.physics.arcade.enable(this.hero);
		this.hero.body.collideWorldBounds = true;

		this.hero.animations.add('fly',[0,1,2,3,4,5,6,7,8,9,10,11],12,true);
		this.hero.animations.play('fly');

		this.hero.hp = 4;
		console.log(this.hero.hp);
		this.keys = this.input.keyboard.createCursorKeys();
	},

	checkCollision:function(sprite1,sprite2){
		if(sprite2.frame == 0 ||sprite2.frame == 1){
			sprite1.hp -=2;
			console.log("Vidas restantes: " + sprite1.hp)
		}
		else if (sprite2.frame == 2 ){
			sprite1.hp +=1;
			console.log("Vidas restantes: " + sprite1.hp)
		}
		else if (sprite2.frame == 3 ){
			sprite1.hp -=1;
			console.log("Vidas restantes: " + sprite1.hp)
		}
		sprite2.kill();
	},
	update:function(){
		this.spawnCandy += this.game.time.elapsed;
		this.candyType = this.game.rnd.integerInRange(0,4);
		if(this.spawnCandy>4000){
			this.spawnCandy = 0;
			this.generateCandy(this.candyType);
		}
		this.physics.arcade.overlap(this.hero,this.candies,null,this.checkCollision,this);

		if(this.keys.up.isDown){
			this.hero.body.velocity.y = this.jumpForce;
		}

		this.candies.forEachAlive(function(element){
			if(element.x < -element.width/2){
				element.kill();
			}
		},this);

		if(this.hero.hp <= 0){
			this.goGameOver();
		}
	},
	generateCandy:function(candyType) {
		let candy = this.candies.getFirstDead();
		let randY = this.game.rnd.integerInRange(0,this.game.height);
		if(candy){
			candy.reset(this.game.width,randY);
		}else{
			candy = this.game.add.sprite(this.game.width,randY,'candy',candyType);
		}
		this.game.physics.arcade.enable(candy);
		candy.body.velocity.x = -500;
		candy.body.immovable = true;
		candy.body.allowGravity = false;
		this.candies.add(candy);
	},
	goGameOver:function(){
		this.state.start("GameOver")
	}
}
