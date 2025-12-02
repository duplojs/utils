import { isResult } from './result.mjs';
import { unwrap } from '../common/unwrap.mjs';

function otherwise(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => otherwise(input, theFunction);
    }
    const [input, theFunction] = args;
    return isResult(input)
        ? unwrap(input)
        : theFunction(input);
}

export { otherwise };
