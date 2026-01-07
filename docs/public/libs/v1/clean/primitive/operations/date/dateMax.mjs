import { max } from '../../../../date/max.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function dateMax(input) {
    return wrapValue(max(input.map(unwrap)));
}

export { dateMax };
