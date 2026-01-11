import { min } from '../../../../date/min.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

/**
 * {@include clean/dateMin/index.md}
 */
function dateMin(input) {
    return wrapValue(min(input.map(unwrap)));
}

export { dateMin };
