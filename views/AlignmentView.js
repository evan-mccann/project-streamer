class AlignmentView {

	constructor(model, stage) {
		this.model = model;
		this.stage = stage;
		this.graphics = new createjs.Graphics();

		if (this.model.type == "offense") {
			// Defines O shape
			this.graphics
			.ss(ds.shapeDiameter*ds.scalingFactor, 1)
			.s("#ffffff")
			.dc(0, 0, ds.shapeDiameter/2);
		} else if (this.model.type == "defense") {
			// Defines X shape
			this.graphics
			.ss(ds.shapeDiameter*ds.scalingFactor, 1)
			.s("#ffffff")
			.mt(0, 0)
			.lt(ds.shapeDiameter/2 * Math.cos(.25 * Math.PI), 
				ds.shapeDiameter/2 * Math.sin(.25 * Math.PI))
			.mt(0, 0)
			.lt(ds.shapeDiameter/2 * Math.sin(.25 * Math.PI), 
				ds.shapeDiameter/2 * -Math.cos(.25 * Math.PI))
			.mt(0, 0)
			.lt(ds.shapeDiameter/2 * -Math.cos(.25 * Math.PI), 
				ds.shapeDiameter/2 * Math.sin(.25 * Math.PI))
			.mt(0, 0)
			.lt(ds.shapeDiameter/2 * -Math.cos(.25 * Math.PI), 
				ds.shapeDiameter/2 * -Math.sin(.25 * Math.PI));
		}
	}

	draw() {
		// Currently, foreach position get location in Position
		// Should be foreach position id get corresponding location in Alignment

		// Possibly, optionally, wrap in Containers

		// CLEAR OLD SHAPES AND BOUND EVENTS ON REDRAW

		// Draw logic just call draw() in PositionViews?
		for (const position of this.model.positions) {
			// OFFENSE
			var shape = new createjs.Shape(this.graphics);
			// Use a getter here?
			shape.x = position[1].x * ds.width;
			shape.y = position[1].y * ds.height;

			shape.on("pressmove", function(e) {
				e.target.x = e.stageX;
				e.target.y = e.stageY;
				this.stage.update();
			});

			this.stage.addChild(shape);
		}
	}
}