export default class DownScene extends Phaser.Scene {
	
	setCameraViewPort(downSceneScreenSize){

		this.screenSize = downSceneScreenSize;
		
		this.origin = {
			x: 0,
			y: this.cameras.main.height - this.screenSize.height
		}

		this.cameras.main.setViewport(
			this.origin.x,
			Phaser.Math.FloorTo(this.origin.y), 
			Phaser.Math.CeilTo(this.screenSize.width),
			Phaser.Math.CeilTo(this.screenSize.height));

		this.cameras.main.setBackgroundColor(0x0000ff);

		this.center = { x:this.screenSize.width / 2, y:this.screenSize.height / 2 }
		
	}

}
