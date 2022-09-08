var Queue = function() {
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.sizeValue = 0;
  newInstance.sizerValue = 0;
  newInstance.setupValue = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.sizerValue] = value;
  this.sizerValue++;
  this.sizeValue++;
}

queueMethods.dequeue = function() {
  let a = this.storage[this.setupValue];
  delete this.storage[this.setupValue];
  this.setupValue++;
  if (this.sizeValue > 0) {
    this.sizeValue--;
  }
  return a;
};

queueMethods.size = function() {
  return this.sizeValue;
};
