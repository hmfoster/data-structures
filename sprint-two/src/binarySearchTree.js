var BinarySearchTree = function(value){
  this.left = undefined;
  this.right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value, node){
  //if node == undefined 
    //node = this.value
  node = node || this;
  if (node === undefined){
    debugger;
  }
  //check if node !== value
  if (node.value !== value){
    //check if value > node and .right = undefined
    if (value > node.value && node.right === undefined){
      //add value to .right
      node.right = new BinarySearchTree(value);
    }
    // else if value > node and .right != undefined
    else if (value>node.value && node.right !== undefined){
      //recur on .right node
      this.insert(value, node.right);
    }
    //else if value < node and .left = undefined
    else if (value < node.value && node.left === undefined){
      //.left = value
      node.left = new BinarySearchTree(value);
    }
    //else if value <node and .left != undefined
    else if (value < node.value && node.left !== undefined){
      //recur on .left
      this.insert(value, node.left);
    }
  }
};

BinarySearchTree.prototype.contains = function(value, node){
  node = node || this;
  if (node.value !== value){
    if (value > node.value && node.right === undefined){
      return false;
    }
    else if (value>node.value && node.right !== undefined){
      return this.contains(value, node.right);
    }
    else if (value < node.value && node.left === undefined){
      return false;
    }
    else if (value < node.value && node.left !== undefined){
      return this.contains(value, node.left);
    } 
  } else{
    return true;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback, node){
  //run fun on node
  node = node || this;
  debugger;
  callback(node.value);
  //run fun on node.right check if undefined??
  if (node.right){
    this.depthFirstLog(callback, node.right);
  }
  //run fun on node.left
  if (node.left){
    this.depthFirstLog(callback, node.left);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .insert: O(log n)
 .contains: O(log n)
 .depthFirstLog: O(log n)
 */

//lower is left (0), higher to right (1)
