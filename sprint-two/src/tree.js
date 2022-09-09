var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  // console.log(this);
  this.children.push(new Tree(value));

};

treeMethods.contains = function(target) {
  var lookForChild = function(node) {
    var result = [];
    if (node.children.length !== 0) {
      if (target === node.value) {
        return true;
      } else {
        for (let i = 0; i < node.children.length; i++) {
          result.push(lookForChild(node.children[i]));
        }
          if (result.includes(true)) {
            return true;
          } else {
            return false;
          }
      }
    } else {
      if (target === node.value) {
        return true;
      } else {
        return false;
      }
    }
  }
  // console.log(this);
  return lookForChild(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// var treeNode = function(value) {
//   var node = {};

//   node.value = value;
//   node.children = [];
//   // node.addChild = function(value) {
//   //   this.children.push(new treeNode(value));
//   // };

//   return node;
// };

//tree = {value: x, children: [{value: x, children: [] }]}