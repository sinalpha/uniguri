import UpScene from "./baseScenes/UpScene.js";

import Uniguri from './gameObjects/Uniguri.js';

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        
        this.physics.world.setBounds(0, 0, 
            this.upSceneScreenSize.width,
            this.upSceneScreenSize.height);

    }

    create(){
        
        this.createUniguri();

    }

    createUniguri(){

        this.uniguri = this.add.existing(new Uniguri(
            this,
            this.upSceneScreenSize.width / 2,
            this.upSceneScreenSize.height,
            'uniguri-default'));
        
    }

}