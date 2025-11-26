import { createEitherKind } from '../kind.mjs';
import { eitherOptionalKind } from './base.mjs';
import { optional } from './create.mjs';
import { left } from '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
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
import './filled.mjs';

const eitherOptionalEmptyKind = createEitherKind("optional-empty");
function optionalEmpty() {
    return eitherOptionalKind.setTo(eitherOptionalEmptyKind.setTo(left("optional", undefined)));
}
function isOptionalEmpty(input) {
    return isLeft(input)
        && eitherOptionalKind.has(input)
        && eitherOptionalEmptyKind.has(input);
}
function whenIsOptionalEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsOptionalEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return input;
    }
    else if (!isOptionalEmpty(input) && isLeft(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : optional(input);
    if (isOptionalEmpty(either)) {
        return theFunction(undefined);
    }
    return either;
}

export { eitherOptionalEmptyKind, isOptionalEmpty, optionalEmpty, whenIsOptionalEmpty };
