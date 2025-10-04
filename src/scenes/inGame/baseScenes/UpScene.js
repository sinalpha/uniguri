export default class UpScene extends Phaser.Scene{

	setCameraViewPort(upSceneScreenSize){

		this.screenSize = upSceneScreenSize;

		this.cameras.main.setViewport(
			0,
			0, 
			Phaser.Math.CeilTo(this.screenSize.width),
			Phaser.Math.CeilTo(this.screenSize.height));

		this.cameras.main.setBackgroundColor(0x00ff00);
	
	}
}