class AlignmentView {

	constructor(model, stage) {
		this.model = model;
		this.stage = stage;
	}

	draw() {
		for (const position of this.model.positions) {
			var view = new PositionView(position, this.stage, this.model.type);
			var x = position[1].x * ds.width;
			var y = position[1].y * ds.height;
			view.draw(x, y);
		}
	}
} 