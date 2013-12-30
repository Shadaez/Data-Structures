var LinkedList = function() {
	this.head = null;
};

LinkedList.prototype.append = function(value) {
	if (this.head === null) {
		this.head = {
			prev: null,
			data: value,
			next: null
		};
	} else {
		var node = recur(this.head);
		node.next = {
			prev: node,
			data: value,
			next: null
		};
	}

	function recur(node) {
		if (node.next === null) {
			return node;
		} else {
			return recur(node.next);
		}
	}
};

LinkedList.prototype.prepend = function(value) {
		if (this.head === null) {
			this.head = {
			prev: null,
			data: value,
			next: null
			};
		} else {
		var temp = {
			prev: null,
			data: value,
			next: this.head
		};
		this.head.prev = temp;
		this.head = temp;
		}
	};

LinkedList.prototype.delete = function(index) {
	function recur(index, current, node) { //will return the node before the one we want deleted
		if (node === null) {
			return false; //throw error in future
		} else if (current + 1 === index) {
			return node;
		} else {
			return recur(index, current + 1, node.next);
		}
	}
	var temp = recur(index, 0, this.head);
	temp.next.next.prev = temp || null; //sets the prev of the node after the deleted to the correct node

	temp.next = temp.next.next || null; //if we deleted the last one it will be undefined 
	//which evaluates to false, so null will be assigned
};

LinkedList.prototype.print = function() {
	if (this.head === null) {
		console.log('[]');
	} else {
		console.log('[' + recur(this.head));
	}

	function recur(node) {
		if (node.next === null) {
			return '"' + node.data + '"]';
		} else {
			return '"' + node.data + '", ' + recur(node.next);
		}
	}
};

LinkedList.prototype.pop_front = function(callback) {
	var temp = this.head;
	temp.prev = null;
	this.head = temp.next;
	temp.next = null;
	this.head.prev = null;
	callback(temp);
};

LinkedList.prototype.pop_back = function(callback) {
	var temp = recur(this.head);

	function recur(node) {
		if (node.next === null) {
			return node;
		} else {
			return recur(node.next);
		}
	}
	if (temp.prev !== null){
		temp.prev.next = null;
		temp.prev = null;
	}
	callback(temp);

};

ll = new LinkedList();

ll.append('a');
ll.print();
ll.prepend('b');
ll.print();
ll.prepend('b');
ll.print();
ll.append('c');
ll.print();
ll.pop_back(console.log);
ll.pop_front(console.log);
