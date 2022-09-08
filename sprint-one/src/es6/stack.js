class Stack {
  constructor() {
    this.storage = {};
    this.sizeValue = 0;
  }

  push(value) {
    this.storage[this.sizeValue] = value;
    this.sizeValue++;
  }

  pop() {
    let a = this.storage[this.sizeValue - 1];
    delete this.storage[this.sizeValue - 1];
    if (this.sizeValue > 0) {
      this.sizeValue--;
    }
    return a;
  }

  size() {
    return this.sizeValue;
  }

}