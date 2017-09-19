class AlignmentView {

	constructor(model, stage) {
		this.model = model;
		this.stage = stage;

		var self = this;
		this.stage.on("positionmoved", function(e) {
			var position = self.model.positions.get(e.id);
			position.x = e.x / ds.width;
			position.y = e.y / ds.height;
			self.model.positions.set(e.id, position);
		});
	}

	draw() {
		for (const position of this.model.positions) {
			var view = new PositionView(position[1].position, this.stage, this.model.type);
			var x = position[1].x * ds.width;
			var y = position[1].y * ds.height;
			view.draw(x, y);
		}
	}
} 