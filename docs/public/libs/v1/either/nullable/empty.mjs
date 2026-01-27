import { nullable } from './create.mjs';
import { nullableKind } from './base.mjs';
import { createEitherKind } from '../kind.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const nullableEmptyKind = createEitherKind("nullable-empty");
/**
 * @deprecated use nullableEmptyKind
 */
const eitherNullableEmptyKind = nullableEmptyKind;
/**
 * {@include either/isNullableEmpty/index.md}
 */
/**
 * {@include either/nullableEmpty/index.md}
 */
/**
 * {@include either/whenIsNullableEmpty/index.md}
 */
function nullableEmpty() {
    return nullableKind.setTo(nullableEmptyKind.setTo(left("nullable", null)));
}
function isNullableEmpty(input) {
    return isLeft(input)
        && nullableKind.has(input)
        && nullableEmptyKind.has(input);
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

export { eitherNullableEmptyKind, isNullableEmpty, nullableEmpty, nullableEmptyKind, whenIsNullableEmpty };
