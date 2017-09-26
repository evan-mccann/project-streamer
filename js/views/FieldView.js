/*
 * View class handling the display logic for a football field, which is a flat green background 
 * by default.
 */
class FieldView {

	constructor(stage) {
		this.stage = stage;
		this.width = ds.width;
		this.height = ds.height;
		this.color = "green";

		// Set default background to flat green
		var background = new createjs.Shape();
		background.graphics.beginFill(this.color);
		background.graphics.rect(0, 0, this.width, this.height);
		this.stage.addChild(background);
	}

	// Add means to refresh the background and clear the old shape, if it's still actually there
}