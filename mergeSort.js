/**
 * Merge Sort
 *
 * Sorts a list in ascending order
 *
 * Divide: find the midpoint of the list and divide into sublists
 * Conquer: recursively sort the sublists created in previous step
 * Combine: Merge the sorted sublists created in previous step
 *
 * @return {Array} list - The sorted list
 */
function mergeSort(list) {

	if (list.length <= 1) {
		return list;
	}

	let [left, right] = split(list);
	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);

}

/**
 * Split
 *
 * Divide unsorted list at midpoint into sublists
 * @return {Array} left, right - Two sublists
 */
function split(list) {
	let mid = Math.floor(list.length / 2);
	let left = list.slice(0, mid);
	let right = list.slice(mid, list.length);

	return [left, right];
	}

/**
 * Merge
 *
 * Merges two lists, sorting them in the process
 *
 * @return {Array} merged - The merged list
*/
function merge(left, right) {
	let l = [],
		i = 0,
		j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			l.push(left[i]);
			i++;

		} else {
			l.push(right[j]);
			j++;
		}
	}

	while (i < left.length) {
		l.push(left[i]);
		i++;
	}
	while (j < right.length) {
		l.push(right[j]);
		j++;
	}

	return l;

}

let list = [3,6,1,42,5,62,1,444,5,2,5,6326,24,2111,342,511,0,0,01];

let l = mergeSort(list);
console.log(l);