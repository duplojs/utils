import { createKind } from '../../common/kind.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isLeft } from '../left/is.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { nullable } from './create.mjs';
import { eitherNullableKind } from './base.mjs';

const eitherNullableFilledKind = createKind("either-nullable-filled");
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
