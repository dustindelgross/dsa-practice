function linearSearch(list, target) {
	/**
	 * Returns index position of target if found, else
	 * returns None
	 */

	for (let i = 0; i < list.length; i++) {
		if ( list[i] == target ) {
			return i;
		}
	}

	return false;

}

function verify( index ) {
	if ( false !== index && undefined !== index) {
		console.log( index );
	} else {
		console.log( "Target not found in list.");
	}
}

let numbers = [1,2,3,4,5,6,7];
let result = linearSearch( numbers, 3 );
verify( result );