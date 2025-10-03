import { GAME_FIGURES } from '../../../gameFigures.js'

export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture){


        super(scene, x, y, texture);

        this.scene = scene;

        //set Physics
        this.scene.physics.add.existing(this, 0);
        this.setCollideWorldBounds(true);
    
        //set Timer for move
        this.scene.time.addEvent({
            delay: 1000, // ms
            callback: ()=>{ 

                const moveSpeed = Phaser.Math.Between(-50, 50);
                
                this.setVelocityX(moveSpeed);

                if(moveSpeed > 0 )
                    this.setFlipX(true);
                else
                    this.setFlipX(false);

             },
            loop: true,
        })


    }


}