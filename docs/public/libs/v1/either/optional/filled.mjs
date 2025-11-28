import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
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
import { optional } from './create.mjs';
import './empty.mjs';
import { eitherOptionalKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import '../../common/override.mjs';

const eitherOptionalFilledKind = createEitherKind("optional-filled");
function optionalFilled(value) {
    return eitherOptionalKind.setTo(eitherOptionalFilledKind.setTo(right("optional", value)));
}
function isOptionalFilled(input) {
    return isRight(input)
        && eitherOptionalKind.has(input)
        && eitherOptionalFilledKind.has(input);
}
function whenIsOptionalFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsOptionalFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return input;
    }
    else if (!isOptionalFilled(input) && isRight(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : optional(input);
    if (isOptionalFilled(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherOptionalFilledKind, isOptionalFilled, optionalFilled, whenIsOptionalFilled };
