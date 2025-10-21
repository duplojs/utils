import { createKind } from '../../common/kind.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { bool } from './create.mjs';
import { eitherBoolKind } from './base.mjs';

const eitherBoolFalsyKind = createKind("either-bool-falsy");
function boolFalsy(value = undefined) {
    return eitherBoolKind.addTo(eitherBoolFalsyKind.addTo(left("bool", value)));
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
