let Game = {}
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);



Game.init = function() {
    console.log('init')
    game.stage.disableVisibilityChange = true;
};

function preload() {
    console.log('preload')
    this.load.image('ground', 'assets/map/ground.png')
    this.load.spritesheet('hero', 'assets/sprites/walk.png', {
        frameWidth: 354,
        frameHeight: 586
    })
};



function create() {
    console.log('create')
    
    Game.playerMap = {};
    this.add.image(400, 300, 'ground');
    
    





    Client.askNewPlayer();
};

function update() {

}

