import d3 from 'd3';
import createChartComp from 'scripts/components/app';
import 'isomorphic-fetch';
import 'babel-polyfill';

const init = () => {
    const palettes = ['palette-sky', 'palette-musgo', 'palette-terra'],
        CreateChartComp = createChartComp(d3);

    fetch('/api/data', { method: 'GET' })
        .then(resp => resp.json())
        .then(resp => CreateChartComp('#root', palettes, resp))
        .catch(e => console.log('error--> ', e));
};

init();
