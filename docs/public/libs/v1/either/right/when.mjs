import { isRight } from './is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsRight(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsRight(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return theFunction(unwrap(input));
    }
    return input;
}

export { whenIsRight };
