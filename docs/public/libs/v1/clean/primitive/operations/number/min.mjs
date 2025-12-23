import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function min(input) {
    return wrapValue(Math.min(...input.map(unwrap)));
}

export { min };
