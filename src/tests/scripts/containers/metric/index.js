import test from 'tape';
import mock from 'mock';

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

test('render svg metric comp', t => {

    const actual = typeof Metric === 'function',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    t.end();
});
