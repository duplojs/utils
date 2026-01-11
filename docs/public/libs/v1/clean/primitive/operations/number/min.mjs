import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

/**
 * {@include clean/min/index.md}
 */
function min(input) {
    return wrapValue(Math.min(...input.map(unwrap)));
}

export { min };
