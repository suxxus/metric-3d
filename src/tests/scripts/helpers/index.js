import test from 'tape';
import {
    annualValsOuput,
    dataForPrepareContextInput,
    dataForPrepareContextOuput,
    doContextOuput,
    palettes,
    reduceRespOuput,
    response
} from 'tests/fixtures/data';
import {
    annualValues,
    compose,
    calculatePercentage,
    curryCalculatePercentage,
    curryToLocale,
    doContext,
    doPercent,
    percentToLocaleDECurrency,
    prepareDataForContext,
    reduceResp,
    setRadius,
    sumVals,
    toLocale,
    valsToLocale
} from 'scripts/helpers';

const before = test;
const after = test;

before('desc: helpers', (t) => {
    t.end();
});

test('setRadius', t => {
    const props = {
            minus: 10,
            width: 100,
            height: 120
        },

        actual = setRadius(props),
        expect = 40;

    t.equal(actual, expect);
    t.end();
});

test('sumVals', t => {
    const props = [100, 200],

        actual = sumVals(props),
        expect = 300;

    t.equal(actual, expect);
    t.end();
});

test('toLocale', t => {
    let actual, expect,

        props = {
            value: 200000,
            locale: 'en-IN',
            currency: 'USD'
        };

    actual = toLocale(props);
    expect = '$200,000';
    t.equal(actual, expect, 'format currency');

    props = { value: 200000, locale: 'en-IN' };
    actual = toLocale(props);
    expect = '200,000';
    t.equal(actual, expect, 'format number');

    t.end();
});

test('curryToLocale', t => {
    const props = {
            locale: 'en-IN',
            currency: 'USD'
        },

        actual = curryToLocale(props)(30000),
        expect = '$30,000';

    t.equal(actual, expect);
    t.end();
});

test('compose', t => {
    const foo = (val) => val + 1,
        baaz = (val) => val + 2,

        composed = compose(foo, baaz),
        actual = composed(5),
        expect = 8;

    t.equal(actual, expect);
    t.end();
});

test('valsToLocale', t => {
    const props = {
            locale: 'en-IN',
            currency: 'USD'
        },

        composed = valsToLocale(props),
        actual = composed([2000, 500]),
        expect = '$2,500';

    t.equal(actual, expect);
    t.end();
});

test('annualValues', t => {
    const props = [100, 102, 115, 99, 125, 132, 115, 123, 155, 125, 98, 128],
        actual = annualValues(props),
        expect = annualValsOuput;

    t.deepEqual(actual, expect);
    t.end();
});

test('calculatePercentage', t => {
    const actual = calculatePercentage(10, 100),
        expect = 10;
    t.equal(actual, expect);
    t.end();
});

test('curryCalculatePercentage', t => {
    const actual = curryCalculatePercentage(10)(100),
        expect = 10;
    t.equal(actual, expect);
    t.end();
});

test('percentToLocaleDECurrency', t => {
    const actual = percentToLocaleDECurrency(100.25),
        expect = '100,25%';
    t.equal(actual, expect);
    t.end();
});

test('doPercent', t => {
    const composed = doPercent(10);
    const actual = composed([200, 200]),
        expect = 2.5;
    t.equal(actual, expect);
    t.end();
});

test('prepareDataForContext', t => {
    const actual = prepareDataForContext(dataForPrepareContextInput),
        expect = dataForPrepareContextOuput;
    t.deepEqual(actual, expect);
    t.end();
});

test('doContext', t => {
    const actual = doContext(dataForPrepareContextOuput),
        expect = doContextOuput;
    t.deepEqual(actual, expect);
    t.end();
});

test('reduceResp', t => {
    const actual = reduceResp(response, palettes, 0),
        expect = reduceRespOuput;
    t.deepEqual(actual, expect);
    t.end();
});

after('end test -----------------------', t => {
    t.end();
});
