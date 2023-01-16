/**
 * An object for storing a single node of a
 * linked list.
 * Two attributes: data, and the link to
 * the next node in the list.
 */
class Node {

	constructor(data) {
		this.data = data;
		this.next = null;
	}

	getData() {
		return `Node data: ${this.data}`;
	}

}

/**
 * Singly linked list
 */
class LinkedList {


	constructor() {
		this.head = null;
	}

	isEmpty() {
		return this.head == null;
	}

	/**
	 *
	 * @returns Number of nodes in the list. Takes O(n) time
	 */
	size() {

		let current = this.head;
		let count = 0;

		while (current) {
			count += 1;
			current = current.next;
		}
		return count;
	}

	/**
	 *
	 * @returns Bool Whether the list is empty or not
	 */
	isEmpty() {
		return this.head == null;
	}

	/**
	 * Adds a new Node object containing data at the head of the list
	 *
	 * Takes O(1) time
	 *
	 * @param {*} data
	 */
	add(data) {
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	/**
	 * Search for the first node with the given data
	 *
	 * Returns the first node with the given data or null if not found
	 *
	 * Takes O(n) time
	 */
	search(data) {
		let current = this.head;

		while (current) {
			if (current.data == data) {
				return current;
			}
			current = current.next;
		}
		return null;
	}


	/**
	 * Inserts a new node with data at index position
	 * Insertion takes O(1) time but finding the node at the insertion point takes O(n) time
	 *
	 * Takes O(n) time overall
	 */
	insert(data, index) {

		if (index === 0) {
			this.add(data);
			return;
		}

		/**
		 * Every time we call current.next (we move to the next node in the list), we'll decrement the value of position by 1. When
		 * position = 0, we've arrived at the node that's at the position we want to insert at. In reality, though, we don't want to
		 * reach 0.
		 *
		 */
		if (index > 0) {

			let newNode = new Node(data);
			let position = index;
			let current = this.head;

			while (position > 1) {
				if (current.next == null) {
					return false;
				}
				current = current.next;
				position -= 1;
			}

			let prev = current;
			let next = current.next;

			prev.next = newNode;
			newNode.next = next;
		}
	}

	/**
	 * Removes node containing the data that matches the key.
	 * Takes O(n) time
	 *
	 * @param {*} key
	 * @returns The removed node on success, null if key doesn't exist.
	 */
	remove(key) {
		/**
		 * In order to remove a node, we would need to search for data the matches the key.
		 * We defined a search method earlier, but we can't use that method here, because we need to modify
		 * the next node after. If we use the search method, we'll get the node we want to remove, but we won't
		 * get the node before to redefine the next node.
		 */

		let current = this.head;
		// Keep track of the previous variable as we traverse the list.
		let prev = null;
		// Keep track of whether we found the key or not.
		let found = false;

		// Keep traversing the list until found is true or until we reach the end of the list.
		while (!found && current) {
			/**
			 * If the key matches the current node and the current node is at the head,
			 * the current node won't have a previous node.
			 * We can just set the head to the next node.
			 */
			if ( current.data === key && current === this.head ) {
				found = true;
				this.head = current.next;
			} else if (current.data === key) {
				/**
				 * If the key matches the current node and the current node is not at the head,
				 * the current node will have a previous node.
				 */
				found = true;
				// This effectively removes the current node from the list,
				// because the previous node will now point to the next node.
				prev.next = current.next;
			} else {
				/**
				 * If the key isn't found, we'll move to the next node and set the current node to the previous node.
				 */
				prev = current;
				current = current.next;
			}

		}
		return current;
	}

	/**
	 * Returns a string representation of the list
	 * Takes O(n) time
	 * @returns String
	 */
	getData() {
		let nodes = [];
		let current = this.head;

		while (current) {
			if (current === this.head)
				nodes.push(`Head: ${current.data}`);
			else if (current.next === null) {
				nodes.push(`Tail: ${current.data}`);
			} else {
				nodes.push(`Node: ${current.data}`);
			}
			current = current.next;
		}

		return nodes.join(" -> ");

	}

}

let n1 = new Node(10);
let n2 = new Node(20);
let list = new LinkedList();

n1.next = n2;
list.head = n1;

console.log(n1);
console.log("List empty? ", list.isEmpty());
console.log("Get data on first node: ", n1.getData());
console.log("List size: ", list.size());

list.add(3);
console.log("List size: ", list.size());
console.log("List getData: ", list.getData());
console.log("Search for 20: ", list.search(20));

console.log("This might break the insert function: ", list.insert(100, 4));