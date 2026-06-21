import { isLeft } from './is.mjs';
import { isRight } from '../right/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsLeftOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsLeftOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    if (isLeft(input)) {
        return theFunction(unwrap(input));
    }
    else if (isRight(input)) {
        return otherwiseFunction(input);
    }
    else {
        return otherwiseFunction(input);
    }
}

export { whenIsLeftOtherwise };
