import { GAME_FIGURES } from './gameFigures.js';

import BootLoader from './scenes/preGame/BootLoader.js';
import Splash from './scenes/preGame/Splash.js'
import Game from './scenes/inGame/Game.js'

const gameType = Phaser.CANVAS;

const gameScenes = [BootLoader, Splash, Game];

const gameScale = {
    parent:"game-container",
    width:GAME_FIGURES["GAME_AREA_WIDTH"],
    height:GAME_FIGURES["GAME_AREA_HEIGHT"],
    autoCenter:Phaser.Scale.CENTER_BOTH,
    mode:Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
} 

const gamePhysics = {
    default: 'arcade',
    arcade: {
        debug: false,
        gravity: {
            x: GAME_FIGURES["GAME_GRAVITY_X"],
            y: GAME_FIGURES["GAME_GRAVITY_Y"]
        },
    }
}

export const config = {
    type:gameType,
    scene: gameScenes,
    scale:gameScale,
    physics:gamePhysics,
}
