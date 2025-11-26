import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../bool/falsy.mjs';
import '../bool/truthy.mjs';
import '../bool/base.mjs';
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
import { nullish } from './create.mjs';
import './filled.mjs';
import { eitherNullishKind } from './base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import { createEitherKind } from '../kind.mjs';

const eitherNullishEmptyKind = createEitherKind("nullish-empty");
function nullishEmpty(value = undefined) {
    return eitherNullishKind.setTo(eitherNullishEmptyKind.setTo(left("nullish", value)));
}
function isNullishEmpty(input) {
    return isLeft(input)
        && eitherNullishKind.has(input)
        && eitherNullishEmptyKind.has(input);
}
function whenIsNullishEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullishEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return input;
    }
    else if (!isNullishEmpty(input) && isLeft(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : nullish(input);
    if (isNullishEmpty(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherNullishEmptyKind, isNullishEmpty, nullishEmpty, whenIsNullishEmpty };
