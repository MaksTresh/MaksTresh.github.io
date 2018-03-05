
var game = new Phaser.Game(800,600,Phaser.CANVAS,'phaser-example',{preload: preload, create: create, update: update, render: render});

function preload() {
	game.load.image('ball','img/ball64.png');
}

var ball;

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);

	ball = game.add.sprite(156,156,'ball');
	game.physics.arcade.enable(ball);

	ball.body.setCircle(32);

	ball.body.collideWorldBounds = true;

	ball.body.bounce.set(0.9);

	ball.body.gravity.y = 3000;


	ball.body.velocity.set(150);



}

function update () {

  	// game.physics.arcade.collide(ball1, ball2);
  	// game.physics.arcade.collide(ball1, disk);
  	// game.physics.arcade.collide(ball2, disk);

  }

  function render () {

  	// game.debug.body(ball);
  }