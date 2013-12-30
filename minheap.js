/*Write a min heap, one that keeps the smallest element at the root, that implements:

insert(data) - Adds the new data element to the heap ensuring that the min heap constraint is maintained across the heap.

peek() - Returns the min value from the heap but does not alter the state of the heap.
Bonus Functionality

Add a method called popMin() that returns the min value from the heap and then deletes the min value from the underlying array.
Be sure to rebalance the heap so that after calling popMin() any heap node is greater than the value of it's parent node.
           1
    2          3 
 4    5     6     7
8,9,10,11,12,13,14,15
*/

var Heap = function(){
	this._heap = [];
};

Heap.prototype = {
	insert: function(data){
		this._heap.push(data);
		this.balancer(this._heap.length-1);
	},
	balancer: function(index){
			var parent_index = Math.ceil(index/2)-1;
			if (index === 0 || this._heap[index] >= this._heap[parent_index]){ //also check if at top
				//done
				return true;
			} else {
				//swap
				var temp = this._heap[parent_index];
				this._heap[parent_index] = this._heap[index]
				this._heap[index] = temp;
				return this.balancer(parent_index);
			}
	},
	peek: function(){
		return this._heap[0];
	},
	height: function(){
		return Math.ceil(Math.log(this._heap.length+1)/Math.log(2))
	},
	rebalance: function(){
		for(i = this._heap.length-1;i >= this._heap.length - (this.height());i--){
			this.balancer(i);
		}
	},
	popMin: function(){
		var temp = this._heap.shift()
		this.rebalance(); //this is breaking it???
		return temp;
	},
	print: function(){
		console.log(this._heap)
	}
}

minHeap = new Heap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(67);
minHeap.insert(1);
minHeap.insert(7);
minHeap.insert(4);
minHeap.insert(8);
minHeap.print();
console.log(minHeap.height());
console.log(minHeap.popMin());
minHeap.print();