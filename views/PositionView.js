class PositionView {

	constructor(model, stage, graphics) {
		this.model = model;
		this.stage = stage;
		this.graphics = graphics || new createjs.Graphics();
	}

	draw(x, y) {
		// Add hitbox so you don't have to click/mouseover an exact shape pixel to get response behavior
		// CLEAR OLD SHAPES AND BOUND EVENTS ON REDRAW
		
		var container = new createjs.Container();

		var shape = new createjs.Shape(this.graphics);

		container.addChild(shape);
		container.x = x;
		container.y = y;

		container.on("pressmove", function(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
			this.stage.update();
		});

		container.on("pressup", function(e) {
			// Update location value in data model
		});

		this.stage.addChild(container);
	}
}