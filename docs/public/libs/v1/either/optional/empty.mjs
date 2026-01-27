import { createEitherKind } from '../kind.mjs';
import { optionalKind } from './base.mjs';
import { optional } from './create.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';

const optionalEmptyKind = createEitherKind("optional-empty");
/**
 * @deprecated use optionalEmptyKind
 */
const eitherOptionalEmptyKind = optionalEmptyKind;
/**
 * {@include either/isOptionalEmpty/index.md}
 */
/**
 * {@include either/optionalEmpty/index.md}
 */
/**
 * {@include either/whenIsOptionalEmpty/index.md}
 */
function optionalEmpty() {
    return optionalKind.setTo(optionalEmptyKind.setTo(left("optional", undefined)));
}
function isOptionalEmpty(input) {
    return isLeft(input)
        && optionalKind.has(input)
        && optionalEmptyKind.has(input);
}
function whenIsOptionalEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsOptionalEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isRight(input)) {
        return input;
    }
    else if (!isOptionalEmpty(input) && isLeft(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : optional(input);
    if (isOptionalEmpty(either)) {
        return theFunction(undefined);
    }
    return either;
}

export { eitherOptionalEmptyKind, isOptionalEmpty, optionalEmpty, optionalEmptyKind, whenIsOptionalEmpty };
