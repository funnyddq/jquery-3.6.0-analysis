Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('new', function ( x ) {

// Create a new object that inherits from the
// constructor's prototype.

    var that = Object.create(this.prototype);

// Invoke the constructor, binding -this- to
// the new object.

    var other = this.apply(that, arguments);

// If its return value isn't an object,
// substitute the new object.

    return (typeof other === 'object' && other) || that;
});

function Add() {
    my_name: "add";
}

var b = Add.new();
console.log(b);
