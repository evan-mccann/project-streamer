class PositionView {

	constructor(model, stage, type) {
		this.model = model;
		this.stage = stage;
		this.shapeGraphics = new createjs.Graphics();
		this.hitArea = new createjs.Graphics();
		this.type = type || "offense";
		this.container = new createjs.Container();

		this.setShape("#ffffff");
	}

	draw(x, y) {
		// CLEAR OLD SHAPES AND BOUND EVENTS ON REDRAW

		var shape = new createjs.Shape(this.shapeGraphics);
		shape.name = "shape";

		this.container.addChild(shape);
		this.container.x = x;
		this.container.y = y;

		var self = this;

		this.container.on("rollover", function(e) {
			self.setShape("blue");
			self.stage.update();
		});

		this.container.on("rollout", function(e) {
			self.setShape("#ffffff");
			self.stage.update();
		});

		this.container.on("pressmove", function(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
			self.stage.update();
		});

		this.container.on("pressup", function(e) {
			this.stage.dispatchEvent(
				new createjs.Event("positionmoved")
				.set({
					id: self.model.id,
					x: self.stage.mouseX, 
					y: self.stage.mouseY
				}), true
			);
		});

		this.stage.addChild(this.container);
	}

	setShape(color) {
		if (this.type == "offense") {

			this.shapeGraphics
			.clear()
			.ss(ds.shapeDiameter*ds.scalingFactor, 1)
			.s(color || "#ffffff")
			.dc(0, 0, ds.shapeDiameter/2);

			this.hitArea
			.beginFill("#000000")
			.drawCircle(0, 0, ds.shapeDiameter/2 + ((ds.shapeDiameter*ds.scalingFactor)/2));
			this.container.hitArea = new createjs.Shape(this.hitArea);

		} else if (this.type == "defense") {

			this.shapeGraphics
			.clear()
			.ss(ds.shapeDiameter*ds.scalingFactor, 1)
			.s(color || "#ffffff")
			.mt(0, 0)
			.lt(-ds.shapeDiameter/2, -ds.shapeDiameter/2)
			.mt(0, 0)
			.lt(ds.shapeDiameter/2, ds.shapeDiameter/2)
			.mt(0, 0)
			.lt(-ds.shapeDiameter/2, ds.shapeDiameter/2)
			.mt(0, 0)
			.lt(ds.shapeDiameter/2, -ds.shapeDiameter/2);
			
			this.hitArea
			.beginFill("#000000")
			.drawRect(
				-ds.shapeDiameter/2 - (ds.shapeDiameter*ds.scalingFactor)/2, 
				-ds.shapeDiameter/2 - (ds.shapeDiameter*ds.scalingFactor)/2, 
				ds.shapeDiameter + ds.shapeDiameter*ds.scalingFactor, 
				ds.shapeDiameter + ds.shapeDiameter*ds.scalingFactor);
			this.container.hitArea = new createjs.Shape(this.hitArea);

			/*
			.mt(0, 0)
			.lt(ds.shapeDiameter/2 * Math.cos(.25 * Math.PI), 
				ds.shapeDiameter/2 * Math.sin(.25 * Math.PI))
			*/

		} else {
			//handle
		}
	}
}