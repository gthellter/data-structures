var Stack = function() {
  this.storage = {};
  this.sizeValue = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeValue] = value;
  this.sizeValue++;
}

Stack.prototype.pop = function() {
  let a = this.storage[this.sizeValue - 1];
  delete this.storage[this.sizeValue - 1];
  if (this.sizeValue > 0) {
    this.sizeValue--;
  }
  return a;
};

Stack.prototype.size = function() {
  return this.sizeValue;
};


