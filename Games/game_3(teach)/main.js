'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let m1;
let m2;
let m3;
let m4;
let m5;
let m6;

let m1Direction = 1;
let m4Direction = -1;
let m5Direction = -1;
let m6Direction = 1;

let sizeOnMonsteres = 0.2;


function preload() {
    Game.load.image("m1","images/monsters/m1.jpg");
}

function create() {
    m1 = Game.add.sprite(0,0,"m1");
    m1.scale.setTo(sizeOnMonsteres);
    //m2 = Game.add.sprite(200,200 ,"m1");
    //m2.scale.setTo(sizeOnMonsteres);
    //console.log(Game.width);
    m3 = Game.add.sprite(Game.width / 2, Game.height /2 ,"m1");
    m3.scale.setTo(sizeOnMonsteres);
    m3.anchor.setTo(0.5);

    m4 = Game.add.sprite(Game.width,0,"m1");
    m4.scale.setTo(sizeOnMonsteres);
    m4.anchor.setTo(1,0);

    m5 = Game.add.sprite(Game.width,Game.height,"m1");
    m5.scale.setTo(sizeOnMonsteres);
    m5.anchor.setTo(1,1);

    m6 = Game.add.sprite(0,Game.height,"m1");
    m6.scale.setTo(sizeOnMonsteres);
    m6.anchor.setTo(0,1);
}

function update() {
    //Top left monster
    m1.y += m1Direction; 
    if(m1.y >= Game.height - m1.height){
        m1Direction = -1;
    }
    if(m1.y <= 0){
        m1Direction = +1;
    }

    //Top right monster
    m4.x += m4Direction;
    if(m4.x <= 0 + m4.width){
        m4Direction = 1;
    }

    if(m4.x > Game.width){
        m4Direction = -1;
    }

    //bot right monoster
    m5.y += m5Direction;
    if(m5.y <= 0 + m5.height){
        m5Direction = 1
    }
   
    if(m5.y >= Game.height){
        m5Direction = - 1
    }

    //bot left monster
    m6.x += m6Direction;
    if(m6.x >= Game.width - m6.width){
        m6Direction = -1
    }

    if(m6.x <= 0){
        m6Direction = 1
    }
}