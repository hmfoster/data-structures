var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.last = 0;
  newQueue.position = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.count;
};

queueMethods.enqueue = function(value){
  this.storage[this.position] = value;
  this.count++;
  this.position++;
};

queueMethods.dequeue = function(){
  if (this.count > 0){
    this.count--;
    var result = this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return result;
  }
};