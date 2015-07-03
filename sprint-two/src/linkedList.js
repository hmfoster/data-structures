var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var prevTail = null;
  var storage = []; //idea

  list.addToTail = function(value){
    if (list.tail !== null){
      prevTail = list.tail;
      prevTail.next = value;
      //list.tail.next = value;
      //list.push(list.tail);
    }
    if (list.head === null){
      list.head = prevTail;
    }
    list.tail = Node(value); //{6:null}

  };


  list.removeHead = function(){
    if (list.head === null){
      list.head = list.tail;
      list.tail = null;
    }
    var headValue = list.head.value; //{2,null}
    list.head.value = list.head.next; // {2, 5} ---> list.head = {5, 3}
    return headValue;
  };

  list.contains = function(target, currValue){
    currValue = currValue || list.head;
    if (currValue.value === target){
      return true;
    } else {
      list.contains(target, currValue.next);
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

//{{V1, N1}, {V2, N2}} N1 === V2

/*
 * Complexity: What is the time complexity of the above functions?
 */



//AddToTail
//if there is already a tail, move it (save it to a placeholder value)
//Save the last tail's .value property (to set the NEXT)
//set the new tail.

//{.head = {4, 2} .tail = {2, 6}}) <--- .tail = {6, null}  {.head{} .tail{} {} {} {} {} {} {} {} {} {}}