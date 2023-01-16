---
layout: post
title:  "Data Structures and Algorithms"
date:   2022-12-09 20:20:51 -0500
categories: data-structures algorithms education
---

### What's an Algorithm?

1. An algorithm is a set of steps or instructions for completing a task.
2. Algorithm is also a set of steps a program takes to finish a task.
3. It's also an established body of knowledge for solving problems well!

> If you're unaware that a solution exists, you might try to make one yourself. You have to know when an algorithm exiss and how to apply which one in several cases.


# "Big O" Notation Visuals
---

Big O is a theoretical definition of the complexity of an algorithm as a funciton of the size. O(n) is the Order of magnitude of complexity.

- Logarithmic Time = O(log n)
- Linear Time = O(n)
- Constant Time = O(1)
- Quadratic Time = O(x^n^)
- Quasilinear Time = O(n log n)


### O(1): Constant Complexity

```
.      |
.      |
Tries  |
.      |............
.      |____________

	n: # of Values in the Range
	(Worst Case Scenario)
```
### O(n): Linear Complexity

```
.      |            .
.      |         .
Tries  |      .
.      |   .
.      |._____________

	n: # of Values in the Range
	(Worst Case Scenario)
```

### O(log n): Logarithmic Complexity

```
.      |
.      |
Tries  |    ..........
.      | ....
.      |..____________

	n: # of Values in the Range
	(Worst Case Scenario)
```

### O(x^n^): Quadratic Complexity

```
.       |   :
.       |   :
Tries	|  .:
.       | .:
.       |.____________

	n: # of Values in the Range
	(Worst Case Scenario)
```

### O(n log n): Quasilinear Complexity

```
.       |        .
.       |       .
Tries	|     .
.       |   .
.       |._____________

	n: # of Values in the Range
	(Worst Case Scenario)
```

> Different algorithms grow at different rates.


## Search Algorithms
---

#### Binary Search

1. A sorted list is the input, an index is output.
2. Target the halfway point of the list, and ask if that value is correct.
3. If it's not, ask if it is greater than or less than the value, and keep the remainder of the options as the new searching pool.
4. Target the halfway point of that pool, and repeat the steps above.

Reading a variable takes the same amount of time, regardless of n, or "Constant Time". O(1) is constant time.

A **logarithm** is ***the inverse of an exponent***. How many times do you need to divide a number by x to get a particular value? (log~x~ of n)
A logarithmic algorithm is generally better than a linear algorithm

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

When an array is declared, a base number of contiguous memory is allocated as the array's storage. Because arrays use indexes, the computer only needs to know where the first index is to reference the entire array.

Space Allocation = n (size of the array) * m (space for item in array)
The computer accesses the part of memory where the array element is by referencing the index number, multiplied by the amount of space allotted to all array elements. So it doesn't search for a specific address in memory, it extrapolates that address with the formula.

### Each data structure solves a particular problem.
Arrays work particularly well with accessing, but are pretty inefficient with inserts and deletes.
A linked list may be a better tool than an array as far as insertions and deletions are concerned.

A Linked List:

- Linear data structure
- Each element in the list is contained in a separate object called a node
- Each node has two pieces of data:
  1. The value of the current node
  2. A reference to the next node in the list
- The list has two parts:
	1. The head
	2. The tail

The tail denotes the end of the list. Every other node points to the next node in the list.
Linked lists are self-referential object.

Singly-linked list only stores a reference to the next node.
A doubly-linked list stores references to both the next node and the previous node.

The standard search algorithm for a singly-linked list is typically O(n) time, but the insertion or deletions are typically O(1), because we only need to redefine the pointers for the node we want to insert/delete after.

### Merge Sort

Merge sort works by splitting up the problem into sub-problems. First, split array into two sub-arrays, split the sub-arrays into sub-arrays, and continue until there are only singular element arrays. Then, we start to merge the singular arrays together into pairs, sorting them as we go. Because we broke up the array before sorting, the sorting algorithm generally performs fewer sorting operations than if it sorted the entire array at once.

Divide & Conquer - cutting apart a problem into smaller problems until each little problem is easy to solve.

## !!!CORS!!! (Unrelated)

Read the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

It basically **allows a server** to ***indicate origins other than itself that the browser allows to load resources***. CORS also has a **pre-flight** request, which ***checks with the server that receives the request to verify that they permit cross-origin resource sharing***.

XMLHttpRequest and the Fetch API both use a **same-origin** policy. The server which receives the request must permit CORS, ***and*** the client application must apply the appropriate headers to the request.
