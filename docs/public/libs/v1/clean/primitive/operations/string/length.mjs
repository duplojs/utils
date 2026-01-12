import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

/**
 * {@include clean/length/index.md}
 */
function length(primitive) {
    return wrapValue(unwrap(primitive).length);
}

export { length };
