import { createEitherKind } from '../kind.mjs';
import { optionalKind } from './base.mjs';
import { optional } from './create.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const optionalFilledKind = createEitherKind("optional-filled");
/**
 * @deprecated use optionalFilledKind
 */
const eitherOptionalFilledKind = optionalFilledKind;
/**
 * {@include either/isOptionalFilled/index.md}
 */
/**
 * {@include either/optionalFilled/index.md}
 */
/**
 * {@include either/whenIsOptionalFilled/index.md}
 */
function optionalFilled(value) {
    return optionalKind.setTo(optionalFilledKind.setTo(right("optional", value)));
}
function isOptionalFilled(input) {
    return isRight(input)
        && optionalKind.has(input)
        && optionalFilledKind.has(input);
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

export { eitherOptionalFilledKind, isOptionalFilled, optionalFilled, optionalFilledKind, whenIsOptionalFilled };
