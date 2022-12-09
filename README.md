# Data Structures and Algorithms
---

### What's an Algorithm?

1. An algorithm is a set of steps or instructions for completing a task.
2. Algorithm is also a set of steps a program takes to finish a task.
3. It's also an established body of knowledge for solving problems well!

> If you're unaware that a solution exists, you might try to make one yourself. You have to know when an algorithm exiss and how to apply which one in several cases.

#### Binary Search
---
1. A sorted list is the input, an index is output.
2. Target the halfway point of the list, and ask if that value is correct.
3. If it's not, ask if it is greater than or less than the value, and keep the remainder of the options as the new searching pool.
4. Target the halfway point of that pool, and repeat the steps above.

# "Big O" Notation Visuals
---

Big O is a theoretical definition of the complexity of an algorithm as a funciton of the size. O(n) is the Order of magnitude of complexity.

### O(1): Constant Complexity

		|
		|
Tries	|
		|............
		|____________

		n: # of Values in the Range
		(Worst Case Scenario)

### O(n): Linear Complexity

		|            .
		|         .
Tries	|      .
		|   .
		|._____________

		n: # of Values in the Range
		(Worst Case Scenario)

### O(log n): Logarithmic Complexity

		|
		|
Tries	|    ..........
		| ....
		|..____________

		n: # of Values in the Range
		(Worst Case Scenario)

### O(x^n^): Quadratic Complexity

		|   :
		|   :
Tries	|  .:
		| .:
		|.____________

		n: # of Values in the Range
		(Worst Case Scenario)

### O(n log n): Quasilinear Complexity

		|        .
		|       .
Tries	|     .
		|   .
		|._____________

		n: # of Values in the Range
		(Worst Case Scenario)

> Different algorithms grow at different rates.

Reading a variable takes the same amount of time, regardless of n, or "Constant Time". O(1) is constant time.

A **logarithm** is ***the inverse of an exponent***. How many times do you need to divide a number by x to get a particular value? (log~x~ of n)

A logarithmic algorithm is generally better than a linear algorithm

Logarithmic Time = O(log n)
Linear Time = O(n)
Constant Time = O(1)
Quadratic Time = O(x^n^)
Quasilinear Time = O(n log n)

**Quadratic Complexity** is generally ***when n is squared***, or multiplied by itself to achieve a specific effect or value.

Similarly, cubic runtime is when the worst-case scenario is n to the third power.

**Quasilinear** is ***O(n log n)***, which is for every value of n, we'll perform a log n operation. Usually found in sorting algorithms.

**Merge sort** takes a collection of numbers, and cuts them in half until there are only singular values in a collection, then performs calculations on those singular values to determine if they are greater than or less than the number next to them, and sorts based on that value.

A **polynomial runtime** is going to be a runtime with a complexity that involves raising n to some exponent. Polynomial runtimes are generally considered efficient.

**Exponential runtimes**, in contrast, are some number, raised to the nth power.

A **factorial** (or combinatorial, n!) is a number multiplied recursively by a decrement of the previous value: 3! = 3 * 2 * 1 = 6

Each step in an algorithm can have a different runtime.

O(1) for checking a length
O(1) for making a comparison to a target

Assuming worst case scenario:
O(1) for checking a length
O(1) for making a comparison to a target
O(log n) for cutting the remainder and repeating the comparison

Space complexity is a metric for gauging how much working memory or extra memory space an operation takes up as it continues computing.

In our iterative (while loop) binary search, we reassigned variables, so the space complexity remained constant. In our recursive binary search, the space complexity was O(log n), because the space taken was exponentially smaller with each function call, but is more expensive than the iterative loop, because it defined new lists each time.



# Data Structures
---

A **data structure** is a data storage format; more specifically, it is:

- A collection of values
- The format they are stored in
- The relationships between the values in the collection
- The operations applied to the data stored in the structure

All of the above are the different components of a data structure, and this is true for arrays, linked lists, binary trees, stacks, hashes, graphs, matrices, and more. All of these examples posess a collection of values, the format of the values, the relationship between the values, and operations that get applied to the values.

An array is a data structure that has a collection of values that are referenced by an index. Each index is ordered sequentially, and each index stores data. The format of the data within the containers varies between languages, but the fundamental feature of reference by index persists.

An array is a contiguous data structure: its data is stored in blocks, side-by-side with no gaps in memory. In non-contiguous data structures, data is stored in various locations in memory, and are referred to by pointers.