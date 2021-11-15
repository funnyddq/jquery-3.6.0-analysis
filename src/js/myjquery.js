(function (global, factory) {
    facotry(global)
})(window, function (window, noGlobal) {
    jQuery = function( selector, context ) {

        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init( selector, context );
    };

    if ( typeof noGlobal === "undefined" ) {
        window.jQuery = window.$ = jQuery;
    }

    return jQuery;
})
