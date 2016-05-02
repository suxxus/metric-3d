import test from 'tape';
import benv from 'benv';
import createArc from 'scripts/components/create-d3-arc';

const before = test;
const after = test;

let CreateArc;

before('desc: createArc', t => {
    benv.setup(() => {
        window.d3 = benv.require('d3');
        CreateArc = createArc(window.d3);
        t.end();
    });
});

test('window.d3 exists', t => {
    const actual = typeof window.d3 === 'object',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

test('should returns arc', t => {
    const actual = typeof CreateArc(155, 80) === 'function',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    benv.teardown();
    t.end();
});
