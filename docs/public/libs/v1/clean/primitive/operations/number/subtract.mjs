import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function subtract(...args) {
    if (args.length === 1) {
        const [subtrahend] = args;
        return (value) => subtract(value, subtrahend);
    }
    const [value, subtrahend] = args;
    return wrapValue(unwrap(value) - unwrap(subtrahend));
}

export { subtract };
