var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if (list.tail !== null){
      list.tail.next = Node(value);
      list.tail= list.tail.next; 

    } else {
      list.tail = Node(value); 
    } 

    if (list.head === null){
      list.head = list.tail;
    }  
  };  


  list.removeHead = function(){

    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target, currValue){
    currValue = currValue || list.head;
    if (currValue.value === target){
      return true;
    } else {
      if (currValue.next){
        return list.contains(target, currValue.next);
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addToTail: O(1)
 .removeHead: O(1)
 .contains: O(n)
 */