import test from 'tape';
import mock from 'mock';
import { context } from 'tests/fixtures/data';

const before = test;
const after = test;

const chart = mock('scripts/containers/chart', {
    'scripts/helpers': {
        compose: () => () => context,
        doContext: () => {},
        prepareDataForContext: () => {}
    },
    'tpls/metric.hbs': () => '<p>John</p>'
}, require).default;

before('desc: chart', t => {
    t.end();
});

test('return chart string tpl', t => {

    const actual = chart(),
        expect = '<p>John</p>';

    t.equal(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    t.end();
});
