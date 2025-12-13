import { min } from '../../../../date/min.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateMin(...input) {
    if (input.length === 1) {
        const [first] = input;
        return (...rest) => (dateMin(...[first, ...rest]));
    }
    return wrapValue(min(input.map(unwrap)));
}

export { dateMin };
