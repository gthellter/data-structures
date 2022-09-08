class Queue {
  constructor() {
    this.storage = {};
    this.sizeValue = 0;
    this.sizerValue = 0;
    this.setupValue = 0;
  }

  enqueue(value) {
    this.storage[this.sizerValue] = value;
    this.sizerValue++;
    this.sizeValue++;
  }

  dequeue() {
    let a = this.storage[this.setupValue];
    delete this.storage[this.setupValue];
    this.setupValue++;
    if (this.sizeValue > 0) {
      this.sizeValue--;
    }
    return a;
  }

  size() {
    return this.sizeValue;
  }
}
