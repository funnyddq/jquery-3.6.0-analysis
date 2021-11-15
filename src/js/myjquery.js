(function (global, factory) {
    factory(global)
})(window, function (window, noGlobal) {
    var version = "3.6.0";

    var jQuery = function (selector, context) {

        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };

    jQuery.fn = jQuery.prototype = {
        name: version
    };

    var init = jQuery.fn.init = function (selector, context) {
        console.log('selector: ' + selector);
        console.log('context: ' + context);
        if (selector) {
            var x = document.getElementById(selector);
            return x;
        }
    }

    if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
    }

    return jQuery;
});
