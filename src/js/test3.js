Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    console.log('2222222');
    console.log(this);
    console.log(this === Number);
    return this;
};

Number.method('hello', function() {
    console.log('1111111');
    console.log(this);
});

a = 10;
a.hello();

console.log(Number);
console.log(a);
