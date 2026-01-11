import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

/**
 * {@include clean/max/index.md}
 */
function max(input) {
    return wrapValue(Math.max(...input.map(unwrap)));
}

export { max };
