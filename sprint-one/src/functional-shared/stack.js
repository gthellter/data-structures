var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.sizeValue = 0;
  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeValue] = value;
  this.sizeValue++;
}

stackMethods.pop = function() {
  let a = this.storage[this.sizeValue - 1];
  delete this.storage[this.sizeValue - 1];
  if (this.sizeValue > 0) {
    this.sizeValue--;
  }
  return a;
};

stackMethods.size = function() {
  return this.sizeValue;
};