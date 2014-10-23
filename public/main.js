var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
  game.load.image('casp', '/img/casper-faith-hand.png');
  game.load.image('eye', 'img/lance-overdose-loader_eye.png');
  game.load.image('cop', 'img/ladycop.png');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');

}

var s1,
    s2,
    s3;

function create(){

  s1 = game.add.sprite(20, 30, 'casp');
  s2 = game.add.sprite(200, 250, 'eye');
  s2.scale.setTo(2);
  s3 = game.add.sprite(50, 250, 'cop');
  s3.anchor.set(0.5)



  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s2, Phaser.Physics.ARCADE);
  game.physics.enable(s3, Phaser.Physics.ARCADE);

  //s1.body.velocity.y = 150;
  //s2.body.velocity.x = 150;
  //s2.body.velocity.y = 150;
  //s3.body.velocity.x = 150;

    //var text = "LadyCop!";
    //var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    //game.add.text(game.world.centerX-300, 0, text, style);

 //TWEEN Image
    var sprite = game.add.sprite(-400, 0, 's1');
    var tween = game.add.tween(s1);
    tween.to({ x: 600 }, 1000);

    //  And this starts it going
    tween.start();

 //ANIMATION

    var bot = game.add.sprite(200, 200, 'bot');
    bot.animations.add('run');
    bot.animations.play('run', 15, true);

//making the robot runn
    var tween2 = game.add.tween(bot);
    tween2.to({x: 700}, 6000);
    tween2.start();

}

function update(){
//making the image follow your mouse
   //  If the sprite is > 8px away from the pointer then let's move to it
    //if (game.physics.arcade.distanceToPointer(s3, game.input.activePointer) > 8)
    //{
        //  Make the object seek to the active pointer (mouse or touch).
        //game.physics.arcade.moveToPointer(s3, 300);
    //}
    //else
    //{
        //  Otherwise turn off velocity because we're close enough to the pointer
      //  sprite.body.velocity.set(0);
    //}


}
