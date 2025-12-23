import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function multiply(...args) {
    if (args.length === 1) {
        const [multiplier] = args;
        return (value) => multiply(value, multiplier);
    }
    const [value, multiplier] = args;
    return wrapValue(unwrap(value) * unwrap(multiplier));
}

export { multiply };
