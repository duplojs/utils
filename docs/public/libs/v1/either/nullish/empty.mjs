import { createEitherKind } from '../kind.mjs';
import { nullish } from './create.mjs';
import { eitherNullishKind } from './base.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

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
