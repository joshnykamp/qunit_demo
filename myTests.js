function isEven(val) {
    return val % 2 === 0
}

test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Zero is an even number');
    assert.ok(isEven(2), 'So is two');
    assert.ok(isEven(-4), 'So is negative four');
    assert.ok(!isEven(1), 'One is not an even number');
    assert.ok(!isEven(-7), 'Neither is negative seven');
    // Fails
    //ok(isEven(3), 'Three is an even number');
});
/**
 * Equal uses == so object and type comparison will fail.
 */
test('assertions', function(assert) {
    assert.equal(1, 1, 'One equals one');
    //equal( {}, {}, 'fails, these are different objects');
    //equal( {a: 1}, {a: 1} , 'fails');
    //equal( [], [], 'fails, there are different arrays');
    //equal( [1], [1], 'fails');
});

test('Check for same type', function(assert) {
    assert.deepEqual( {}, {}, 'passes, objects have the same content');
});