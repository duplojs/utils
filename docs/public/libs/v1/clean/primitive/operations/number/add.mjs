import { wrapValue } from '../../../../common/wrapValue.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function add(...args) {
    if (args.length === 1) {
        const [operand] = args;
        return (value) => add(value, operand);
    }
    const [value, operand] = args;
    return wrapValue(unwrap(value) + unwrap(operand));
}

export { add };
