var Graph = function(){
  this.vertices = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.vertices.push(node);
};

Graph.prototype.contains = function(node){
  return _.contains(this.vertices, node);
};

Graph.prototype.removeNode = function(node){
  var nodeLoc = _.indexOf(this.vertices, node);
  delete this.vertices[nodeLoc];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++) {
    if (fromNode === this.edges[i][0] && toNode === this.edges[i][1]) {
      return true;  
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var byeNode1 = null;
  var byeNode2 = null;
  for (var i = this.edges.length-1; i >= 0; i--) {
    if (fromNode === this.edges[i][0] && toNode === this.edges[i][1]) {
      byeNode1 = i;
    } 
    if (toNode === this.edges[i][0] && fromNode === this.edges[i][1]) {
      byeNode2 = i;
    } 
  } 
  if (byeNode1>byeNode2){
    this.edges.splice(byeNode1,1);
    this.edges.splice(byeNode2, 1);
  } else { 
    this.edges.splice(byeNode2, 1);
    this.edges.splice(byeNode1,1);
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.vertices, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addNode: O(1)
 .contains: O(n)
 .removeNode: O(n)
 .addEdge: O(1)
 .hasEdge: O(n)
 .removeEdge: O(n)
 .forEachNode: O(n)
 */
