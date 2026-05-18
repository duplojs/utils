import { isLeft } from './is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isRight } from '../right/is.mjs';

function whenIsLeftElse(...args) {
    if (args.length === 2) {
        const [theFunction, elseFunction] = args;
        return (input) => whenIsLeftElse(input, theFunction, elseFunction);
    }
    const [input, theFunction, elseFunction] = args;
    if (isLeft(input)) {
        return theFunction(unwrap(input));
    }
    else if (isRight(input)) {
        return elseFunction(input);
    }
    else {
        return elseFunction(input);
    }
}

export { whenIsLeftElse };
