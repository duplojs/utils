import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function divide(...args) {
    if (args.length === 1) {
        const [divisor] = args;
        return (value) => divide(value, divisor);
    }
    const [value, divisor] = args;
    return wrapValue(unwrap(value) / unwrap(divisor));
}

export { divide };
