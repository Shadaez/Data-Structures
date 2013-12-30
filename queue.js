var Queue = function() {
	this.head = null;
	this.count = 0;
};

Queue.prototype.enqueue = function(value) {
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
	this.count++;

	function recur(node) {
		if (node.next === null) {
			return node;
		} else {
			return recur(node.next);
		}
	}
};


Queue.prototype.dequeue = function(callback) {
	if (this.count > 0) {
		var temp = this.head;
		temp.prev = null;
		this.head = temp.next;
		temp.next = null;
		callback(null, temp.data);
		this.count--
	} else {
		callback("Empty");
	}

};

Queue.prototype.size = function() {
	return this.count;
}


var queue = new Queue();

function queuer(a, b) {
	if (a === null) {
		console.log(b);
	}
}

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue("c");
console.log(queue.size());
queue.dequeue(queuer);
queue.dequeue(queuer);
queue.dequeue(queuer);
queue.dequeue(queuer);
queue.dequeue(queuer);