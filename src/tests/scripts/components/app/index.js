import test from 'tape';
import mock from 'mock';
import benv from 'benv';

const before = test;
const after = test;

const createApp = mock('scripts/components/app', {
    'scripts/containers/metric': () => {},
    'scripts/containers/chart': () => {},
    'scripts/helpers': () => {}
}, require).default;

let App = createApp();

before('desc: App', t => {
    benv.setup(() => {
        t.end();
    });
});

test('window exists', t => {
    const actual = typeof window === 'object',
        expect = true;
    t.ok(actual, expect);
    t.end();
});


test('app function', t => {
    const actual = typeof App === 'function',
        expect = true;
    t.ok(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    benv.teardown();
    t.end();
});
