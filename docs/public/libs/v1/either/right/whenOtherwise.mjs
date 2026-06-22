import { isRight } from './is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isLeft } from '../left/is.mjs';

function whenIsRightOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsRightOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    if (isRight(input)) {
        return theFunction(unwrap(input));
    }
    else if (isLeft(input)) {
        return otherwiseFunction(input);
    }
    else {
        return otherwiseFunction(input);
    }
}

export { whenIsRightOtherwise };
