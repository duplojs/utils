import { createEitherKind } from '../kind.mjs';
import { nullish } from './create.mjs';
import { nullishKind } from './base.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const nullishEmptyKind = createEitherKind("nullish-empty");
/**
 * @deprecated use nullishEmptyKind
 */
const eitherNullishEmptyKind = nullishEmptyKind;
/**
 * {@include either/isNullishEmpty/index.md}
 */
/**
 * {@include either/nullishEmpty/index.md}
 */
/**
 * {@include either/whenIsNullishEmpty/index.md}
 */
function nullishEmpty(value = undefined) {
    return nullishKind.setTo(nullishEmptyKind.setTo(left("nullish", value)));
}
function isNullishEmpty(input) {
    return isLeft(input)
        && nullishKind.has(input)
        && nullishEmptyKind.has(input);
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

export { eitherNullishEmptyKind, isNullishEmpty, nullishEmpty, nullishEmptyKind, whenIsNullishEmpty };
