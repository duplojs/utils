import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function max(input) {
    return wrapValue(Math.max(...input.map(unwrap)));
}

export { max };
