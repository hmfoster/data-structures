var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count=0;
  var last = 0;
  var position = 0
  someInstance.enqueue = function(value){
    storage[position] = value;
    count++;
    position++;
  };

  someInstance.dequeue = function(){
    if (count>0){
      count--;
      var result = storage[last];
      delete storage[last];
      last++; 
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
