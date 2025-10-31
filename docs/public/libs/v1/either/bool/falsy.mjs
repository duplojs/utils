import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { createEitherKind } from '../kind.mjs';
import { eitherBoolKind } from './base.mjs';
import { bool } from './create.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';

const eitherBoolFalsyKind = createEitherKind("bool-falsy");
function boolFalsy(value = undefined) {
    return eitherBoolKind.setTo(eitherBoolFalsyKind.setTo(left("bool", value)));
}
function isBoolFalsy(input) {
    return isLeft(input)
        && eitherBoolKind.has(input)
        && eitherBoolFalsyKind.has(input);
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

export { boolFalsy, eitherBoolFalsyKind, isBoolFalsy, whenIsBoolFalsy };
