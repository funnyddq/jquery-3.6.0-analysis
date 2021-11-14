var a = function a() {
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
