class BinarySearchTree {

  constructor(value, parent) {

    this.value = value
    this.parent = parent || null;
    this.left = null;
    this.right = null;
    console.log('New Tree', value);
  }

  insert(value) {
    var rootValue = this.value;
    if (value < rootValue) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value, rootValue)
      } else {
        BinarySearchTree.prototype.insert.call(this.left, value);
      }
    } else if (value > rootValue) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value, rootValue)
      } else {
        BinarySearchTree.prototype.insert.call(this.right, value);
      }
    }
  }

// insert(child) { //Value

//   var whatTree = function(value) {
//     var parentTree = this.value;
//     if (value < parentTree) {
//       if (this.left === null) {
//         this.left = new BinarySearchTree(value, parentTree);
//       } else {
//         whatTree.call(this.left, value);
//       }
//     } else if (value > parentTree) {
//       if (this.right === null) {
//         this.right = new BinarySearchTree(value, parentTree);
//       } else {
//         whatTree.call(this.right, value);
//       }
//     }
//   }

//   whatTree.call(this, child);
// }

  contains(value) {
    console.log(this.value, value);
    if (value === this.value) {
      return true;
    } else {
      if (this.left !== null && value < this.value) {
        return BinarySearchTree.prototype.contains.call(this.left, value);
      } else if (this.right !== null && value > this.value) {
        return BinarySearchTree.prototype.contains.call(this.right, value);
      }
    }
    return false;
  }

// contains(value) {
//   var checkTree = function(branch) {
//     var result = [];

//     if (branch === this.value) {
//       return true;
//     } else if (branch < this.value) {
//       if (this.left === null) {
//         return false;
//       } else {
//         result.push(checkTree.call(this.left, branch));
//       }
//     } else if (branch > this.value) {
//       if (this.right === null) {
//         return false;
//       } else {
//       result.push(checkTree.call(this.right, branch));
//       }
//     }

//     if (result.includes(true)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   return checkTree.call(this, value);
// }

  depthFirstLog(func) {

    function nodeFuncRun () {
      func(this.value);
      if (this.left !== null) {
        nodeFuncRun.apply(this.left);
      }
      if (this.right !== null)  {
        nodeFuncRun.apply(this.right);
      }
    }

    nodeFuncRun.call(this);
    }


  // depthFirstLog = function(func) {
  //   var depthArray = new Set();

  //   var depthArrayCreator = function() {
  //     depthArray.add(this.value);
  //     if (this.left !== null) {
  //       depthArrayCreator.call(this.left);
  //     }
  //     if (this.right !== null) {
  //       depthArrayCreator.call(this.right);
  //     }
  //     if (this.left === null && this.right === null) {
  //       return;
  //     }
  //   }

  //   depthArrayCreator.call(this);
  //   console.log(depthArray._storage);
  //   depthArray = Array.from(depthArray._storage);

  //   for (let i = 0; i < depthArray.length; i++) {
  //     func.call(null, depthArray[i]);
  //   }
  // }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
