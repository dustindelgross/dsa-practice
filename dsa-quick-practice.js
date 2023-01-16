

function merge( arr1, arr2 ) {

	let merged = [];
	let i = 0;
	let j = 0;

	while ( i < arr1.length && j < arr2.length ) {
		if ( arr1[i] < arr2[j] ) {
			merged.push( arr1[i] );
			i++;
		} else {
			merged.push( arr2[j] );
			j++;
		}
	}

	while ( i < arr1.length ) {
		merged.push( arr1[i] );
			i++;
	}
	while( j < arr2.length ) {
		merged.push(arr2[j]);
		j++;
	}

	return merged;
}

function mergeSort ( arr ) {

	let mid = arr.length / 2;
	let firstHalf = arr.slice(0, mid);
	let secondHalf = arr.slice( mid, arr.length);

	if ( firstHalf.length > 1 ) {
		firstHalf = mergeSort( firstHalf );
	}

	if ( secondHalf.length > 1 ) {
		secondHalf = mergeSort( secondHalf );
	}

	return merge( firstHalf, secondHalf);

}

let randomNums = [ 55, 25, 888, 1000000, 234,  68238459, 120938, 15, 1, 1, 1, 0, 0, -05 ];
let sorted = mergeSort( randomNums );

/**
 * Binary Search
 *
 * A binary search algorithm typically takes a sorted list
 * as an input, and outputs an integer if it exists in the
 * array, null if not.
 *
 * @param array sortedList - Sorted list of integers.
 * @param int target - Target integer to find in the list.
 *
 * @return int | null The found integer on success,
 * null on failure.
 */
function binarySearch( sortedList, target ) {

	let midPoint = Math.floor((sortedList.length - 1 )/ 2);

	if ( sortedList[midPoint] === target ) {
		return target;
	}

	if ( sortedList[midPoint] < target ) {
		sortedList = sortedList.splice( midPoint, sortedList.length );
		return binarySearch( sortedList, target );
	}

	if ( sortedList[midPoint] > target ) {
		sortedList = sortedList.splice( 0, midPoint );
		return binarySearch( sortedList, target );
	}

	return null;

}