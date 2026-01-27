import { nullable } from './create.mjs';
import { nullableKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const nullableFilledKind = createEitherKind("nullable-filled");
/**
 * @deprecated use nullableFilledKind
 */
const eitherNullableFilledKind = nullableFilledKind;
/**
 * {@include either/isNullableFilled/index.md}
 */
/**
 * {@include either/nullableFilled/index.md}
 */
/**
 * {@include either/whenIsNullableFilled/index.md}
 */
function nullableFilled(value) {
    return nullableKind.setTo(nullableFilledKind.setTo(right("nullable", value)));
}
function isNullableFilled(input) {
    return isRight(input)
        && nullableKind.has(input)
        && nullableFilledKind.has(input);
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

export { eitherNullableFilledKind, isNullableFilled, nullableFilled, nullableFilledKind, whenIsNullableFilled };
