

// Instantiate a new graph
var Graph = function(key) {
  this.storage = {};
  this.key = 0;
};

var GraphNode = function(value) {
  var node = {};

  node.value = value;
  node.edge = [];

  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[this.key] = new GraphNode(node);
  this.key++;
  //console.log(this.storage);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //Value
  result = [];
  for (let element in this.storage) {
    if (this.storage[element].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //Value
  for (let element in this.storage) {
    if (this.storage[element].value === node) {
      delete this.storage[element];
    }
      //Needs to Remove Edges
    if (this.storage[element] !== undefined) {
      this.storage[element].edge = _.filter(this.storage[element].edge, function(x) {return x !== node});
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//Node - {value: (value)}, edge: [contains Nodes values]}
Graph.prototype.hasEdge = function(fromNode, toNode) { //Value1 & Value2
  for (let element in this.storage) {
    if (this.storage[element].value === fromNode) {
      if (this.storage[element].edge.indexOf(toNode) !== -1) {
        return true;
      }
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromEdge, toEdge;
  for (let element in this.storage) {
    if (this.storage[element].value === fromNode) {
      fromEdge = this.storage[element];
    }
    if (this.storage[element].value === toNode) {
      toEdge = this.storage[element];
    }
  }

  var toEdgeClone = Object.assign({}, toEdge);
  var fromEdgeClone = Object.assign({}, fromEdge);

  //console.log(fromEdge.edge);
  fromEdge.edge.push(toEdgeClone.value);
  toEdge.edge.push(fromEdgeClone.value);
  //console.log(this.storage);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //Value1 & Value2
  for (let element in this.storage) {
    if (this.storage[element].value === fromNode) {
      var index = this.storage[element].edge.indexOf(toNode);
      this.storage[element].edge = _.filter(this.storage[element].edge, function(x) {x !== toNode});
    }
    if (this.storage[element].value === toNode) {
      var index = this.storage[element].edge.indexOf(fromNode);
      this.storage[element].edge = _.filter(this.storage[element].edge, function(x) {x !== fromNode});
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let element in this.storage) {
    if (Array.isArray(this.storage[element].edge)) {
      cb.call(null, this.storage[element].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

