class PlayerView {

	constructor(shape, centerX, centerY, diameter, color) {
		this.shape = shape || "O";
		this.diameter = diameter || 100;
		this.centerX = centerX || this.diameter/2;
		this.centerY = centerY || this.diameter/2;
		this.color = color || "#ffffff";
		this.scalingFactor = 0.2; // Scaling factor from shape diameter to stroke width

		this.path = new Path2D();
	}

	draw(context) {
		if (this.shape == "O") {
			this.path.arc(this.centerX, this.centerY, this.diameter/2, 0, Math.PI*2);
		} else if (this.shape == "X") {
			this.path.moveTo(this.centerX - (this.diameter/2), this.centerY - (this.diameter/2));
			this.path.lineTo(this.centerX + (this.diameter/2), this.centerY + (this.diameter/2));
			this.path.moveTo(this.centerX - (this.diameter/2), this.centerY + (this.diameter/2));
			this.path.lineTo(this.centerX + (this.diameter/2), this.centerY - (this.diameter/2));
		}
		context.strokeStyle = this.color;
		context.lineWidth = this.diameter * this.scalingFactor;
		context.lineCap = "round";
		context.stroke(this.path);
	}
}