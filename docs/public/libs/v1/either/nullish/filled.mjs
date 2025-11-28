import '../left/create.mjs';
import '../left/error.mjs';
import '../left/fail.mjs';
import { isLeft } from '../left/is.mjs';
import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
import '../future/success.mjs';
import '../future/error.mjs';
import '../future/base.mjs';
import '../nullable/empty.mjs';
import '../nullable/filled.mjs';
import '../nullable/base.mjs';
import { nullish } from './create.mjs';
import './empty.mjs';
import { eitherNullishKind } from './base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import { createEitherKind } from '../kind.mjs';
import '../../common/override.mjs';
import '../right/success.mjs';
import { isRight } from '../right/is.mjs';
import { right } from '../right/create.mjs';
import '../right/ok.mjs';

const eitherNullishFilledKind = createEitherKind("nullish-filled");
function nullishFilled(value) {
    return eitherNullishKind.setTo(eitherNullishFilledKind.setTo(right("nullish", value)));
}
function isNullishFilled(input) {
    return isRight(input)
        && eitherNullishKind.has(input)
        && eitherNullishKind.has(input);
}
function whenIsNullishFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullishFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return input;
    }
    else if (!isNullishFilled(input) && isRight(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : nullish(input);
    if (isNullishFilled(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherNullishFilledKind, isNullishFilled, nullishFilled, whenIsNullishFilled };
