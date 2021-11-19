function undefined_test(a, undefined) {
    console.log('a = ' + a);
    console.log('undefined = ' + undefined);
    console.log('typeof undefined = ' + typeof undefined);
}

console.log('undefined = ' + undefined);
console.log('typeof undefined = ' + typeof undefined);
undefined_test(1, undefined);

undefined = 'OK';
console.log('==========');
console.log('undefined = ' + undefined);
console.log('typeof undefined = ' + typeof undefined);
undefined_test(1, undefined);
