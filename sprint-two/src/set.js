var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  set.key = 0;


  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
  // if (!this.storage[this.key]) {
  //   this.storage[key] = item;
  //   this.key++;
  // }
  // if (this.storage[item] === undefined) {
  //   console.log('T1');
  // }
  //console.log(this._storage);
};

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
