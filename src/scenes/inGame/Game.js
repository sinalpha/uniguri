import Home from './Home.js';
import Menu from './Menu.js';
import Status from './Status.js'

import { GAME_FIGURES } from '../../gameFigures.js';

export default class Game extends Phaser.Scene {
    constructor(){
        super({ key : "Game" });

        this.runningScene = { Up : null, Down : null };

    }

    init(){

        this.separateScreen();
        
    }

    separateScreen(){

        this.gameScreenSize = this.scale.gameSize;
        this.upScreenSize = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * GAME_FIGURES["GAME_UP_SCREEN_RATIO"] }; 
        this.downScreenSize = { width:this.gameScreenSize.width, height:this.gameScreenSize.height * GAME_FIGURES["GAME_DOWN_SCREEN_RATIO"] };

        this.runningScene.Up = this.game.scene.add("Home", Home, true, {screenSize : this.upScreenSize});
        this.runningScene.Down = this.game.scene.add("Menu", Menu, true, {screenSize : this.downScreenSize});

    }



}