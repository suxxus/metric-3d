import metric from 'scripts/containers/metric';
import chart from 'scripts/containers/chart';
import { reduceResp } from 'scripts/helpers';

export default d3 => {
    return (container, palettes, resp) => {

        const Metric = metric(d3);

        resp.data.forEach((item, idx) => {

            let compiledHtml = chart(reduceResp(resp, palettes, idx)),
                metricContainerId = `#metric-${item.id}`;

            const renderComp = () => {
                    window.document.querySelector(container)
                        .insertAdjacentHTML('beforeend', compiledHtml);
                    Metric({ container: metricContainerId, data: item });
                },

                action = window.document.querySelector(container) ? renderComp : () => '';

            action();

        });
    };
};
