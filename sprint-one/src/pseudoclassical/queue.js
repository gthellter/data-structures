var Queue = function() {
  this.storage = {};
  this.sizeValue = 0;
  this.sizerValue = 0;
  this.setupValue = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizerValue] = value;
  this.sizerValue++;
  this.sizeValue++;
}

Queue.prototype.dequeue = function() {
  let a = this.storage[this.setupValue];
  delete this.storage[this.setupValue];
  this.setupValue++;
  if (this.sizeValue > 0) {
    this.sizeValue--;
  }
  return a;
};

Queue.prototype.size = function() {
  return this.sizeValue;
};


