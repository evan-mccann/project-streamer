class PositionView {

	constructor(position) {
		this.shape = position.type;
		this.diameter = 50;
		this.centerX = position.x;
		this.centerY = position.y;
		this.color = "#ffffff";
		this.scalingFactor = 0.2; // Scaling factor from shape diameter to stroke width
	}

	draw(context) {
		if (this.shape == "O") {
			// OFFENSE

			this.path.arc(this.centerX, this.centerY, this.diameter/2, 0, Math.PI*2);
		} else if (this.shape == "X") {
			// DEFENS
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