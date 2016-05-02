import test from 'tape';
import mock from 'mock';
import benv from 'benv';
import { createMetricProps } from 'tests/fixtures/data';

const before = test;
const after = test;

let CreateMetric;

before('desc: createMetric', (t) => {
    benv.setup(() => {

        window.d3 = benv.require('d3');

        const createMetric = mock('scripts/components/create-metric', {
            'scripts/components/create-d3-area': () => () => {},
            'scripts/components/create-d3-pie': () => () => [{}, {}],
            'scripts/components/create-d3-arc': () => () => {}
        }, require).default;

        CreateMetric = createMetric(window.d3);
        t.end();
    });
});

test('window.d3 exists', t => {
    const actual = typeof window.d3 === 'object',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

test('createMetric', t => {
    const actual = JSON.stringify(CreateMetric(createMetricProps)).search('null'),
        expect = -1;
    t.equal(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    benv.teardown();
    t.end();
});
