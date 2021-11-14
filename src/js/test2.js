var a = {
    x : 1,
    a_f: function () {
        function b() {
            console.log(this);
        }
        b();
        console.log('-------');
        console.log(this);
    }
};
a.a_f();
