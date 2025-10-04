import UpScene from "./baseScenes/UpScene.js";
import Uniguri from './gameObjects/Uniguri.js';

export default class Home extends UpScene{

    init(data){

        this.setCameraViewPort(data.screenSize);
        
        this.physics.world.setBounds(0, 0, 
            this.screenSize.width,
            this.screenSize.height);

    }

    create(){
        
        this.createUniguri();
        
        
    }

    createUniguri(){

        this.uniguri = this.add.existing(new Uniguri(
            this,
            this.screenSize.width / 2,
            this.screenSize.height,
            'uniguri-default'));
        
    }

}