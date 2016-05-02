import test from 'tape';
import benv from 'benv';
import createPie from 'scripts/components/create-d3-pie';
import { revenueData, pieLayoutDataOuput } from 'tests/fixtures/data';

const before = test;
const after = test;

let CreatePie;

before('desc: createPie', t => {
    benv.setup(() => {
        window.d3 = benv.require('d3');
        CreatePie = createPie(window.d3);
        t.end();
    });
});

test('window.d3 exists', t => {
    const actual = typeof window.d3 === 'object',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

test('should returns a pie layout', t => {
    const actual = CreatePie(revenueData.values),
        expect = pieLayoutDataOuput;

    t.deepEqual(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    benv.teardown();
    t.end();
});
