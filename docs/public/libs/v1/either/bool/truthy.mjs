import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { bool } from './create.mjs';
import './falsy.mjs';
import { eitherBoolKind } from './base.mjs';
import '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../right/success.mjs';
import { isRight } from '../right/is.mjs';
import { right } from '../right/create.mjs';
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

const eitherBoolTruthyKind = createEitherKind("bool-truthy");
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
