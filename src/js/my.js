$(function() {
    $();
    $('p').append('<p id="append">append</p>');
    var mynode = $('#append');
    mynode.attr('nonce', 'xxx-yyy');
// $.globalEval('console.log(\'*****OK******\');', {
//     nonce:"nonce-2726c7f26c"
// });
    $.globalEval('console.log(\'*****OK******\');', mynode);
});
