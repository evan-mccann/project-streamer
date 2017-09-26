/*
 * Data model defining a position on a football field
 *  - id
 *  - name
 *  - players (multiple, as on a depth chart. Ie, [ "tom brady", "jimmy garoppolo" ])
 */
class Position {

	constructor(id) {
		this.id = id;
	}
}