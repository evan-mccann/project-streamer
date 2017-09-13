function initCanvas() {
	// Global shape width and height based on canvas size

	// List of Positions and their relative (to a 2:1 viewport) locations 
	// retrieved from server, agnostic to Players and PositionGroups
	var alignment = new Map([
		[0,{x:.5,y:.5}], 	// C
		[1,{x:.33,y:.5}], 	// LT
		[2,{x:.67,y:.5}], 	// RT
		[3,{x:.415,y:.5}], 	// LG
		[4,{x:.585,y:.5}],  // RG
		[5,{x:.755,y:.6}],  // TE
		[6,{x:.5,y:.8}], 	// QB
		[7,{x:.415,y:.65}], // RB
		[8,{x:.1,y:.5}], 	// WR
		[9,{x:.2,y:.6}], 	// WR
		[10,{x:.9,y:.5}]	// WR
	]);

	var canvasElement = document.getElementById("gridiron");
	if (canvasElement.getContext) { // if is valid canvas element
		var canvas = new CanvasView(canvasElement);
		canvas.backgroundColor = "green";
		canvas.alignment = alignment;
		canvas.draw();
	}
}