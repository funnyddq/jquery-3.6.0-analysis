var count = 0;
var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fib = function (n) {
        count++;
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( ));

console.log(fibonacci(10));
console.log(count);
