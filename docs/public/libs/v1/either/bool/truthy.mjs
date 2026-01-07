import { eitherBoolKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import { bool } from './create.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const eitherBoolTruthyKind = createEitherKind("bool-truthy");
/**
 * {@include either/boolTruthy/index.md}
 */
/**
 * {@include either/isBoolTruthy/index.md}
 */
/**
 * {@include either/whenIsBoolTruthy/index.md}
 */
function boolTruthy(value) {
    return eitherBoolKind.setTo(eitherBoolTruthyKind.setTo(right("bool", value)));
}
function isBoolTruthy(input) {
    return isRight(input)
        && eitherBoolKind.has(input)
        && eitherBoolTruthyKind.has(input);
}
function whenIsBoolTruthy(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsBoolTruthy(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return input;
    }
    else if (!isBoolTruthy(input) && isRight(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : bool(input);
    if (isBoolTruthy(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { boolTruthy, eitherBoolTruthyKind, isBoolTruthy, whenIsBoolTruthy };
