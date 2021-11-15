window.onload = function() {
    var doc = $('test');
    console.log('typeof doc: ' + typeof doc);
    console.log(doc);
    doc = $();
    console.log('typeof doc: ' + typeof doc);
    console.log(doc);
    console.log('$.name: ' + $.name);
    console.log('$.prototype.name: ' + $.prototype.name);
    console.log('$().__proto__ === $.prototype.init.prototype: ' + ($().__proto__ === $.prototype.init.prototype));
}
