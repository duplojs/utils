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
import { nullable } from './create.mjs';
import './filled.mjs';
import { eitherNullableKind } from './base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import { createEitherKind } from '../kind.mjs';

const eitherNullableEmptyKind = createEitherKind("nullable-empty");
function nullableEmpty() {
    return eitherNullableKind.setTo(eitherNullableEmptyKind.setTo(left("nullable", null)));
}
function isNullableEmpty(input) {
    return isLeft(input)
        && eitherNullableKind.has(input)
        && eitherNullableEmptyKind.has(input);
}
function whenIsNullableEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullableEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return input;
    }
    else if (!isNullableEmpty(input) && isLeft(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : nullable(input);
    if (isNullableEmpty(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherNullableEmptyKind, isNullableEmpty, nullableEmpty, whenIsNullableEmpty };
