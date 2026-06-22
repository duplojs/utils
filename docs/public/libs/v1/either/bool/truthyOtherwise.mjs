import { bool } from './create.mjs';
import { isBoolTruthy } from './truthy.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsBoolTruthyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsBoolTruthyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : bool(input);
    return isBoolTruthy(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsBoolTruthyOtherwise };
