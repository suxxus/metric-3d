import { compose, prepareDataForContext, doContext } from 'scripts/helpers';
import tpl from 'tpls/metric.hbs';

export default data => {
    const context = compose(doContext, prepareDataForContext)(data);
    return tpl(context);
};
