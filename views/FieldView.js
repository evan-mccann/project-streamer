class FieldView {

	constructor(stage) {
		this.stage = stage;
		this.width = 1000;
		this.height = 500;
		this.color = "green";

		var background = new createjs.Shape();
		background.graphics.beginFill(this.color);
		background.graphics.rect(0, 0, this.width, this.height);
		this.stage.addChild(background);

		// For use inside closures
		var self = this;
		/* Prevents text selection from canvas
		this.element.addEventListener('selectstart', function(e) {
			e.preventDefault();
			return false;
		}, false);
		// 
		this.element.addEventListener('mousedown', function(e) {
			var mouse = self.getMouse(e);
			var mx = mouse.x;
			var my = mouse.y;
			var shapes = self.model;
		});
		*/
	}

	// Add means to refresh the background and clear the old shape, if it's still actualy there
}