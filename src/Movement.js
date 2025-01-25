class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene')
    }

    init() {
        this.PLAYER_SPEED = 350;
    }

    preload() {
        this.load.spritesheet("Player", "./assets/spritesheets/Character_002.png", {
            frameWidth: 48, 
        })
    }

    create() {
        this.cameras.main.setBackgroundColor(0xdddddd)

        this.player = this.physics.add.sprite(width/2, height/2, "Player", 1).setScale(2)
        //this.physics.physics.add()

        this.player.body.setCollideWorldBounds(true)
        this.player.body.setSize(32,32).setOffset(8, 16)

        this.anims.create({
            key: 'idle-down',
            frameRate:0,
            repeat:-1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 1,
                end: 1,
            }),
        })

        this.anims.create({
            key: 'idle-up',
            frameRate:0,
            repeat:-1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 10,
                end: 10,
            }),
        })

        
        this.anims.create({
            key: 'walk-down',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 0,
                end: 2,
            }),
        })
        

        this.anims.create({
            key: 'walk-up',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 9,
                end: 11,
            }),
        })

        this.anims.create({
            key: 'walk-right',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 6,
                end: 8,
            }),
        })

        this.anims.create({
            key: 'walk-left',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("Player", {
                start: 3,
                end: 5,
            }),
        })

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        //this.player.play('walk-down', true)
        let playerVector = new Phaser.Math.Vector2(0,0)

        let playerDir=  "down"

        if (cursors.left.isDown) {
            playerVector.x += -1
            playerDir=  "left"
        }
        if (cursors.right.isDown) {
            playerVector.x += 1
            playerDir=  "right"
        }

        if (cursors.up.isDown) {
            playerVector.y += -1
            playerDir=  "up"
        }
        if (cursors.down.isDown) {
            playerVector.y += 1
            playerDir=  "down"
        }


        playerVector.normalize()

        //this.player.x += playerVector.x * this.PLAYER_SPEED

        //this.player.y += playerVector.y * this.PLAYER_SPEED

        this.player.setVelocity(this.PLAYER_SPEED * playerVector.x, this.PLAYER_SPEED * playerVector.y)

        let playerMovement
        playerVector.length() ?playerMovement = "walk" : playerMovement = "idle"
        this.player.play(playerMovement + "-" + playerDir, true)
    }
}