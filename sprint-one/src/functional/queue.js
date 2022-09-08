var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var sizer = 0;
  var setup = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[sizer] = value;
    sizer++;
    size++;
  };

  someInstance.dequeue = function() {
    let a = storage[setup];
    delete storage[setup];
    setup++;
    (size > 0) ? size-- : false;
    return a;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

//Current Issue
// When adding in new strings after removing their key is differently saved.
