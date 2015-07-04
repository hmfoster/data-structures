var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //add item
    this._storage[item] = true;


};

setPrototype.contains = function(item){
  //look at each item in storage
  return !!this._storage[item];
};

setPrototype.remove = function(item){
  if (this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .add: O(1)
 .contains: O(1)
 .remove: O(1)
 */
