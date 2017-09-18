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
		for (const position of this.model.positions) {
			var view = new PositionView(position, this.stage, this.graphics);
			var x = position[1].x * ds.width;
			var y = position[1].y * ds.height;
			view.draw(x, y);
		}
	}
} 