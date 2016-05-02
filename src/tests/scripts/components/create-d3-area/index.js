import test from 'tape';
import benv from 'benv';
import createArea from 'scripts/components/create-d3-area';
import { annualValsOuput, containerConf } from 'tests/fixtures/data';

const before = test;
const after = test;

let CreateArea;

before('desc: createArea', (t) => {
    benv.setup(() => {
        window.d3 = benv.require('d3');
        CreateArea = createArea(window.d3);
        t.end();
    });
});

test('window.d3 exists', t => {
    const actual = typeof window.d3 === 'object',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

test('should return an area function', t => {

    const props = {
            data: annualValsOuput,
            width: containerConf.width,
            height: containerConf.height
        },

        actual = typeof CreateArea(props) === 'function',
        expect = true;

    t.ok(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    benv.teardown();
    t.end();
});
