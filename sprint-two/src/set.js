var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //if storage is undefined
/*  if (this._storage === {}){
    //create storage with item as key, null as value
    this._storage[item] = true;
  }*/
  //compare item to everything in storage
    //if not there
  if (!_.contains(this._storage, item)){
      //add item
    this._storage[item] = true;
  }

};

setPrototype.contains = function(item){
  //look at each item in storage
  var isTrue = false;
  for (var key in this._storage){
    if (key === item){
      isTrue = true;
    }
  }
  return isTrue;
  //if item equals the key
    //return trun
  //else return false
};

setPrototype.remove = function(item){
  if (this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
