// helpers

export const calculatePercentage = (p, y) => (p / y) * 100;

export const compose = (f, g) => {
    return x => f(g(x));
};

export const setRadius = ({ width = 0, height = 0, minus = 0 }) => {
    return (Math.min(width, height) / 2) - minus;
};

export const sumVals = (value = []) => {
    return value.reduce((pv, cv) => {
        return pv + cv;
    }, 0);
};

export const toLocale = ({ value = 0, locale = 'USD', currency }) => {
    return currency ? value.toLocaleString(locale, {
        style: 'currency',
        currency: currency,
        maximumSignificantDigits: 2
    }) : value.toLocaleString(locale);
};

// -------------------------------
// specific funtions for this app
// -------------------------------

export const curryToLocale = props => {
    return value => toLocale(Object.assign({}, props, { value: value }));
};

export const annualValues = value => value.map((item, idx) => {
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return { x: months[idx], y: item };
});

export const valsToLocale = ({ locale = 'USD', currency = '' }) => {
    return compose(curryToLocale({ locale, currency }), sumVals);
};

export const curryCalculatePercentage = p => {
    return y => {
        return calculatePercentage(p, y);
    };
};

export const doPercent = p => compose(curryCalculatePercentage(p), sumVals);

export const percentToLocaleDECurrency = value => value.toFixed(2).replace('.', ',') + '%';

export const prepareDataForContext = ({ locale, targets, data, palette }) => {

    return Object.assign({}, {
        locale,
        targets
    }, data, {
        classnames: ['first-value', 'second-value'],
        palette: palette
    });
};

export const doContext = data => {

    const dofooter = datum => {

        return datum.values.map((item, idx) => {

            let per = doPercent(item)(datum.values);

            return {
                amount: toLocale({
                    value: item,
                    locale: datum.locale,
                    currency: datum.currency
                }),
                classname: datum.classnames[idx],
                percentage: percentToLocaleDECurrency(per),
                target: datum.targets[idx]
            };
        });
    };

    return {
        id: 'metric-' + data.id,
        footer: dofooter(data),
        palette: data.palette
    };
};

export const reduceResp = (response, palettes, idx) =>
    Object.assign({}, response, { data: response.data[idx] }, { palette: palettes[idx] });
