import createMetric from 'scripts/components/create-metric';
import {
    valsToLocale,
    setRadius,
    annualValues
} from 'scripts/helpers';

export default (d3) => {
    return ({ container = 'body', data = {} }) => {

        const {
            title,
            values,
            annual
        } = data,
            Metric = createMetric(d3),

            doSubtitle = valsToLocale({
                locale: 'de-DE',
                currency: data.currency
            }),

            props = {
                width: 178,
                height: 178,
                container: container,
                classnames: [
                    'first-value',
                    'second-value'
                ],
                title: title,
                subtitle: doSubtitle(values),
                inner: setRadius({
                    width: 175,
                    height: 175
                }),
                outer: setRadius({
                    width: 175,
                    height: 175,
                    minus: 10
                }),
                annual: annualValues(annual),
                values: values
            };

        Metric(props);
    };
};
