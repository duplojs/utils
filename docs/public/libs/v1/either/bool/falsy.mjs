import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { bool } from './create.mjs';
import './truthy.mjs';
import { eitherBoolKind } from './base.mjs';
import { left } from '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../right/success.mjs';
import { isRight } from '../right/is.mjs';
import '../right/create.mjs';
import '../right/ok.mjs';
import '../future/success.mjs';
import '../future/error.mjs';
import '../future/base.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import { createEitherKind } from '../kind.mjs';
import '../../common/override.mjs';

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
