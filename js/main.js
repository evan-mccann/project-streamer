var ds = {
	width: 1000,
	height: 500,
	scalingFactor: .2, // Width of lines relative to diameter of shapes
	shapeDiameter: 60
};

function init() {

	// Build data model, pass to view

	var stage = new createjs.Stage("gridiron");
	stage.enableMouseOver(20);

	createjs.EventDispatcher.initialize(AlignmentView.prototype);

	var field = new FieldView(stage);

	// List of Positions and their relative (to a 2:1 viewport) locations 
	// retrieved from server, agnostic to Players and PositionGroups
	// Position locations should belong in Alignment, not Position.

	// X and Y are relative (fractional) coordinates
	var locations = [
		{id: 0, x: .5, y: .5},		// C
		{id: 1, x: .33, y: .5},		// LT
		{id: 2, x: .67, y: .5},		// RT
		{id: 3, x: .415, y: .5},	// LG
		{id: 4, x: .585, y: .5},	// RG
		{id: 5, x: .755, y: .5},	// TE
		{id: 6, x: .5, y: .8},		// QB
		{id: 7, x: .415, y: .65},	// RB
		{id: 8, x: .1, y: .5},		// WR
		{id: 9, x: .2, y: .6},		// WR
		{id: 10, x: .9, y: .5}		// WR
	];

	var positions = [
		new Position(0),
		new Position(1),
		new Position(2),
		new Position(3),
		new Position(4),
		new Position(5),
		new Position(6),
		new Position(7),
		new Position(8),
		new Position(9),
		new Position(10)
	];

	var alignmentModel = new Alignment();
	alignmentModel.type = "offense";
	alignmentModel.positions = new Map();
	// Sloppy?
	for (var i in positions) {
		for (var j in locations) {
			if (positions[i].id == locations[j].id) {
				alignmentModel.positions.set(
					positions[i].id, 
					{
						position: positions[i],
						x: locations[j].x,
						y: locations[j].y
					}
				);
			}
		}
	}

	var alignment = new AlignmentView(alignmentModel, stage);

	alignment.draw();

	stage.update();
}