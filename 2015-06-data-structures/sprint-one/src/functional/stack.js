var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var count=0;
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    if (count>0){
      count--;
      var result = storage[count];
      delete storage[count];
      return result;
    } 
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
