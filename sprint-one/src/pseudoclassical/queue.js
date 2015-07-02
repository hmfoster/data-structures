var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.position = 0;
  this.last = 0;
};

Queue.prototype.size = function(){
  return this.count;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.position] = value;
  this.count++;
  this.position++;
};

Queue.prototype.dequeue = function(){
  if (this.count > 0){
    this.count--;
    var result = this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return result;
  }
};

var newQueue = new Queue();