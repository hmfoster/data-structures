var Graph = function(){
  this.vertex = null;
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
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
