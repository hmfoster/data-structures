var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //set this.i = tuple that contains the k,v pair.
  if (this._storage[i]){
    this._storage[i] = [this._storage[i]];
    this._storage[i].push([k, v]);
  } else {
    this._storage[i] = [k, v];
  }

};
// [this._storage[i]]
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //look at this._storage[i]
  if (this._storage[i]){
    if (Array.isArray(this._storage[i][0])){
      //if the array is nested, search through it.
      for (var j = 0; j < this._storage[i].length; j++){
        if (this._storage[i][j][0] === k){
          return this._storage[i][j][1];
        }
      }
    } else {
    return this._storage[i][1];
    //return that value
    }
  } else {
    return null;
  }

};

HashTable.prototype.remove = function(k){
  //find where the key is
  var i = getIndexBelowMaxForKey(k, this._limit);
  //delete the tuple at i
  delete this._storage[i];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
