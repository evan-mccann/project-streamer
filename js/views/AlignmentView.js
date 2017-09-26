/*
 * View class handling the display logic for an alignment of positions on a football field
 * (I.e., 11-personnel or cover 2), represented visually by multiple O's or X's in specific 
 * locations relative to each other. 
 */
class AlignmentView {

	constructor(model, stage) {
		this.model = model;
		this.stage = stage;

		var self = this;

		// When the user moves a Position to a new location, update the data model
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