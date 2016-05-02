import deepFreeze from 'deep-freeze';

export const palettes = ['palette-sky', 'palette-musgo', 'palette-terra'];

export const response = deepFreeze({
    targets: ['tablet', 'smartphone'],
    locale: 'USD',
    data: [{
        id: 1,
        title: 'revenue',
        currency: 'USD',
        values: [12000, 40000],
        anual: [100, 102, 115, 99, 125, 132, 115, 123, 155, 125, 98, 128]
    }, {
        id: 2,
        title: 'impressions',
        values: [52000, 80000],
        anual: [10, 15, 25, 14, 35, 85, 15, 22, 30, 21, 12, 24]
    }, {
        id: 3,
        title: 'visits',
        values: [600000, 900000],
        anual: [100, 105, 155, 100, 98, 120, 125, 110, 180, 144, 154, 195]
    }]
});

export const annualValsOuput = deepFreeze([
    { x: 1, y: 100 },
    { x: 2, y: 102 },
    { x: 3, y: 115 },
    { x: 4, y: 99 },
    { x: 5, y: 125 },
    { x: 6, y: 132 },
    { x: 7, y: 115 },
    { x: 8, y: 123 },
    { x: 9, y: 155 },
    { x: 10, y: 125 },
    { x: 11, y: 98 },
    { x: 12, y: 128 }
]);

export const revenueData = deepFreeze(Object.assign({}, response.data[0]));

export const containerConf = {
    width: 160,
    height: 160,
    container: 'body'
};

export const pieLayoutDataOuput = [{
    data: 12000,
    value: 12000,
    startAngle: 0,
    endAngle: 1.449965840118366,
    padAngle: 0
}, {
    data: 40000,
    value: 40000,
    startAngle: 1.449965840118366,
    endAngle: 6.283185307179586,
    padAngle: 0
}];

export const createMetricProps = {
    container: 'body',
    width: 175,
    height: 175,
    anual: [100, 102, 115, 99, 125, 132, 115, 123, 155, 125, 98, 128],
    title: 'fancy',
    subtitle: '200000',
    values: [12000, 40000],
    classnames: ['first-value', 'second-value'],
    inner: 0,
    outer: 10
};

export const context = deepFreeze({ data: { user: 'John' } });

// --------------------------------------
// prepare data to be consumed by chart
// --------------------------------------
export const dataForPrepareContextInput = deepFreeze(Object.assign({}, response, { data: revenueData }, { palette: palettes[0] }));

export const dataForPrepareContextOuput = deepFreeze({
    id: 1,
    title: 'revenue',
    locale: 'USD',
    currency: 'USD',
    classnames: ['first-value', 'second-value'],
    palette: 'palette-sky',
    targets: ['tablet', 'smartphone'],
    values: [12000, 40000],
    anual: [100, 102, 115, 99, 125, 132, 115, 123, 155, 125, 98, 128]
});

export const doContextOuput = deepFreeze({
    id: 'metric-1',
    footer: [{
        classname: 'first-value',
        amount: '$12,000',
        percentage: '23,08%',
        target: 'tablet'
    }, {
        classname: 'second-value',
        amount: '$40,000',
        percentage: '76,92%',
        target: 'smartphone'
    }],
    palette: 'palette-sky'
});

export const reduceRespOuput = {
    'targets': ['tablet', 'smartphone'],
    'locale': 'USD',
    'data': {
        id: 1,
        title: 'revenue',
        currency: 'USD',
        values: [12000, 40000],
        anual: [100, 102, 115, 99, 125, 132, 115, 123, 155, 125, 98, 128]
    },
    'palette': 'palette-sky'
};
