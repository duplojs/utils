import { createEitherKind } from '../kind.mjs';
import { boolKind } from './base.mjs';
import { bool } from './create.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const boolFalsyKind = createEitherKind("bool-falsy");
/**
 * @deprecated use boolFalsyKind
 */
const eitherBoolFalsyKind = boolFalsyKind;
/**
 * {@include either/boolFalsy/index.md}
 */
/**
 * {@include either/isBoolFalsy/index.md}
 */
/**
 * {@include either/whenIsBoolFalsy/index.md}
 */
function boolFalsy(value = undefined) {
    return boolKind.setTo(boolFalsyKind.setTo(left("bool", value)));
}
function isBoolFalsy(input) {
    return isLeft(input)
        && boolKind.has(input)
        && boolFalsyKind.has(input);
}
function whenIsBoolFalsy(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsBoolFalsy(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return input;
    }
    else if (!isBoolFalsy(input) && isLeft(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : bool(input);
    if (isBoolFalsy(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { boolFalsy, boolFalsyKind, eitherBoolFalsyKind, isBoolFalsy, whenIsBoolFalsy };
