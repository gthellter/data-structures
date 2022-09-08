var Stack = function() {

  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.sizeValue = 0;


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
