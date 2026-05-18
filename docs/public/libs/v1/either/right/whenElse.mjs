import { isRight } from './is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isLeft } from '../left/is.mjs';

function whenIsRightElse(...args) {
    if (args.length === 2) {
        const [theFunction, elseFunction] = args;
        return (input) => whenIsRightElse(input, theFunction, elseFunction);
    }
    const [input, theFunction, elseFunction] = args;
    if (isRight(input)) {
        return theFunction(unwrap(input));
    }
    else if (isLeft(input)) {
        return elseFunction(input);
    }
    else {
        return elseFunction(input);
    }
}

export { whenIsRightElse };
