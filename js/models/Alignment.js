/*
 * Data model defining an alignment of positions on a football field
 *  - id
 *  - type ("offense" || "defense")
 *  - positions (map of position IDs to corresponding relative drawing coordinates)
 */
class Alignment {
	
	constructor() {
		this.type;
		this.positions;
	}
}