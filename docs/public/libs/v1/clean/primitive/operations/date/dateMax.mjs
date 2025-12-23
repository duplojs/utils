import { max } from '../../../../date/max.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateMax(...input) {
    if (input.length === 1) {
        const [first] = input;
        return (...rest) => (dateMax(...[first, ...rest]));
    }
    return wrapValue(max(input.map(unwrap)));
}

export { dateMax };
