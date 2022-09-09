var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeNode = function(value) {
  var node = {};

  node.value = value;
  node.children = null;
  _.extend(node, treeMethods);

  return node;
};

//tree = {value: x, children: [{value: x, children: [] }]}


var treeMethods = {};

treeMethods.addChild = function(value) {

  console.log(this);
  if (this.children === null) {
    this.children = [];
    this.children.push(new treeNode(value));
  } else {
    //addChild.call(this, value);
  }

};

treeMethods.contains = function(target) {
  var lookForChild = function(node) {
    if (node.children !== null) {
      if (target === node.value) {
        return true;
      } else {
        for (let i = 0; i < node.children.length; i++) {
          return lookForChild(node.children[i]);
        }
      }
    } else {
      if (target === node.value) {return true;
      } else {
      return false;
      }
    }
  }
  console.log(this);
  return lookForChild(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
