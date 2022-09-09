var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      node1 = new Node(value);
      list.head = node1;
      list.tail = node1;
    } else {
      list.tail.next = (new Node(value));
      list.tail = list.tail.next;
    }
    // console.log(node1);
    // console.log(list);
  };

  list.removeHead = function() {
    var previousHead = list.head.value;
    list.head = list.head.next;
    return previousHead;
  };

  list.contains = function(target) {
    var lookFor = function(node) {
      if (node.next !== null) {
        if (target === node.value) {
          return true;
        } else {
          return lookFor(node.next);
        }
      } else {
        if (target === node.value) {return true;
        } else {
        return false;
        }
      }
    }
    return lookFor(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Contains = Linear
 * Add and Remove = Constant
 */

