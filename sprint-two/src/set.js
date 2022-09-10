var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  //set.key = 0;


  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  this._storage[item] = true;

  // if (!this._storage.includes(item)) {
  //   this._storage.push(item);
  // }

};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
  // if (this._storage.includes(item)) {
  //   return true;
  // }
  // return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  // if (this._storage.indexOf(item) !== -1) {
  //   this._storage.splice(this._storage.indexOf(item), 1);
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
