class AlignmentView {

	constructor(model, stage) {
		this.model = model;
		this.stage = stage;
		this.graphics = new createjs.Graphics();
		
		if (model.type == "offense") {
			// Defines O shape
			this.graphics.ss(20, 1).s("#ffffff").dc(0, 0, 30);
		} else if (model.type == "defense") {
			// Defines X shape
			for (const position of model.positions) {
				// DEFENSE
			}
		}
	}

	draw() {
		// Currently, foreach position get location in Position
		// Should be foreach position id get corresponding location in Alignment

		// Draw logic just call draw() in PositionViews?

		for (const position of this.model.positions) {
			// OFFENSE
			var o = new createjs.Shape(this.graphics);
			// Use a getter here?
			o.x = position[1].x * 1000;
			o.y = position[1].y * 500;
			this.stage.addChild(o);
		}
	}
}