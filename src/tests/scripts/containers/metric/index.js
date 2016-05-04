import test from 'tape';
import mock from 'mock';
import { response } from 'tests/fixtures/data';

const metric = mock('scripts/containers/metric', {
    'scripts/components/create-metric': () => () => {},
    'scripts/helpers': {
        valsToLocale: () => () => {},
        setRadius: () => {},
        annualValues: () => {}
    }
}, require).default;

const before = test;
const after = test;

let Metric;

before('desc: metric', (t) => {
    Metric = metric({});
    t.end();
});

test('Metric should be a function', t => {
    const actual = typeof Metric === 'function',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

test('render svg metric comp', t => {
    const actual = typeof Metric({ container: 'body', response }) === 'undefined',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    t.end();
});
