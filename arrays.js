let numbers = [ 1, 2, 3 ];
result = numbers[0];

/**
 * If you try to access an index that doesn't exist,
 * the memory address returned isn't part of the structure.
 */
// console.log(result);

// Basic linear search operator
// console.log( numbers.includes(1) );

// Linear Search using the map method
numbers.map( ( el ) => {
	console.log( el == 1 );
});

// Inserting items into arrays

// Using push, adding to the end
console.log( numbers );
numbers.push(4);
console.log( numbers );

// Using shift, adding to the beginning
numbers.unshift(0);
console.log( numbers );

// Using the length property
numbers[numbers.length] = 5;
console.log( numbers );

// Using splice, ( index, deleteCount, toInsert )
numbers.splice(6,0,6);
console.log( numbers );

/**
 * Ammortized Constant Space Complexity
 *
 * In insert operations, every affected element needs to be shifted
 * over 1 index.
 */

/**
 * Using concat method.
 * Note: One of two things can happen here.
 *
 * 1. This could double the size of the
 * memory space that we use, because we
 * may declare a separate variable.
 *
 * 2. We could instead reassign an existing
 * variable.
 */
let usingConcat = numbers.concat([7,8,9]);
numbers = numbers.concat([7,8,9]);
console.log( "numbers: ", numbers );
console.log( "usingConcat: ", usingConcat );