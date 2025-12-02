import { isLeft } from './is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsLeft(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsLeft(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenIsLeft };
