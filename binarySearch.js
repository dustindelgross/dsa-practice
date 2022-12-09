function binarySearch( list, target ) {
	let first = 0;
	let last = list.length - 1;

	while ( first <= last ) {
		let midpoint = Math.floor((first + last)/ 2);
		if ( list[midpoint] == target ) {
			return midpoint;
		} else if ( list[midpoint] < target ) {
			first = midpoint + 1;
		} else {
			last = midpoint - 1;
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

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let result = binarySearch( numbers, 8 );
verify( result );