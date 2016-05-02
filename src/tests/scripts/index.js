import test from 'tape';
import main from 'scripts';

test('index', function(t) {
    var actual = main(),
        expect = true;
    t.ok(actual, expect);
    t.end();
});
