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
import { nullable } from './create.mjs';
import './empty.mjs';
import { eitherNullableKind } from './base.mjs';
import '../nullish/empty.mjs';
import '../nullish/filled.mjs';
import '../nullish/base.mjs';
import '../optional/empty.mjs';
import '../optional/filled.mjs';
import '../optional/base.mjs';
import { createEitherKind } from '../kind.mjs';

const eitherNullableFilledKind = createEitherKind("nullable-filled");
function nullableFilled(value) {
    return eitherNullableKind.setTo(eitherNullableFilledKind.setTo(right("nullable", value)));
}
function isNullableFilled(input) {
    return isRight(input)
        && eitherNullableKind.has(input)
        && eitherNullableFilledKind.has(input);
}
function whenIsNullableFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullableFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return input;
    }
    else if (!isNullableFilled(input) && isRight(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : nullable(input);
    if (isNullableFilled(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherNullableFilledKind, isNullableFilled, nullableFilled, whenIsNullableFilled };
