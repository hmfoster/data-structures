var BinarySearchTree = function(value){
//lower is left, higher to right
  this.left = undefined;
  this.right = undefined;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value, node){
  //if node == undefined, node = this
  node = node || this;
  //check if node.value !== value
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
  callback(node.value);
  //run fun on node.right check if undefined
  if (node.right){
    this.depthFirstLog(callback, node.right);
  }
  //run fun on node.left
  if (node.left){
    this.depthFirstLog(callback, node.left);
  }
};

BinarySearchTree.prototype.closestNumber = function(collection, value){
  
  var closestNumber ;
  var smallestDifference ;

  var context = this;

  _.each(collection, function(item){
    context.insert(item);
  });

  this.depthFirstLog(function(nodeValue){
    if (nodeValue === value){
      closestNumber = nodeValue;
      return;
    } else {
      if (smallestDifference === undefined){
        smallestDifference = Math.abs(value - nodeValue);
        closestNumber = nodeValue;
      } else if (Math.abs(value - nodeValue) < smallestDifference){
        closestNumber = nodeValue;
        smallestDifference = Math.abs(value - nodeValue);
      }
    }
  });

  return closestNumber;
};

var arrayClosestNumber = function(array, value){

  var closestNumber;
  var smallestDifference;

  _.each(array, function(item){

    if (item === value){
      closestNumber = item;
      return;
    } else {
      if (smallestDifference === undefined){
        smallestDifference = Math.abs(value - item);
        closestNumber = item;
      } else if (Math.abs(value - item) < smallestDifference) {
        closestNumber = item;
        smallestDifference = Math.abs(value - item);
      }
    }

  });

  return closestNumber;
};
//write a function that takes a list and a number
//turn the list into a binary search tree
//run depthFirstLog, passing an a funciton that compares the number to target

/*
 * Complexity: What is the time complexity of the above functions?
 .insert: O(log n)
 .contains: O(log n)
 .depthFirstLog: O(log n)
 */

