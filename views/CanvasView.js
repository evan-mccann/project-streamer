class CanvasView {

	constructor(canvasElement) {
		if (canvasElement.getContext) { // if is valid canvas element
			this.element = canvasElement;
			this.context = this.element.getContext("2d");
		} else {
			// not a valid canvas element
		}
	}

	draw() {
		var width = 1000;
		var height = 500;

		// Get this user's home screen and draw it
		this.context.fillStyle = this.backgroundColor;
		this.context.fillRect(0, 0, width, height);

		// this.alignment set in main.js
		for (const position of this.alignment) {
			new PlayerView(
				"O", 
				position[1].x * width, 
				position[1].y * height, 
				50, 
				"#ffffff")
			.draw(this.context);
		}
	}
}