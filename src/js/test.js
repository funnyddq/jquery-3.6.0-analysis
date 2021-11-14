var a = [1, 2, 3];

console.log(a.__proto__ === Array.prototype);
console.log(Array.prototype.isPrototypeOf(a));

a = function a() {
    var x = 1;
    function b() {
        var y = x;
        function c() {
            var z = x;
            console.log(z);
        }
        c();
    }
    b();
}
a();

function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}

var undefined = 2;
add(2, undefined);
q
