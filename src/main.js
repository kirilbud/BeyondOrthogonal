// Code Practice: Beyond Orthogonal
// Name:Kiril Saltz
// Date: 1/24/25

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    pixleArt: true,
    render: {// not sure why this is not working
        pixleArt: true,
    },
    physics:{
        default: 'arcade',
        arcade: {
            debugger: true
        },
    },
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config