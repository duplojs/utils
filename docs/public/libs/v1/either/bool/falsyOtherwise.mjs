import { bool } from './create.mjs';
import { isBoolFalsy } from './falsy.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsBoolFalsyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsBoolFalsyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : bool(input);
    return isBoolFalsy(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsBoolFalsyOtherwise };
