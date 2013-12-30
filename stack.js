var Stack = function() {
	this.tail = null;
	this.count = 0;
};

Stack.prototype.pop = function(callback) {
	if (this.count === 0) {
		callback("Underflow");
	} else {
		var temp = this.tail;
		this.tail = this.tail.prev;
		this.count--;
		callback(null, temp.data);
	}
};

Stack.prototype.push = function(value) {
	if (this.tail === null) {
		this.tail = {
			prev: null,
			data: value
		};
	} else {
		this.tail = {
			prev: this.tail,
			data: value
		};
	}
	this.count++;
};

function popper(err, value) {
	if (err === null) {
		console.log(value);
	} else {
		return false;
	}
}

var s = new Stack();
s.push('a');
s.push('b');
s.push('c');
s.push('d');
s.push('e');
s.push('f');
s.push('g');
s.push('h');
s.push('i');
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);
s.pop(popper);

var stack2 = new Stack();
stack2.pop(popper);
