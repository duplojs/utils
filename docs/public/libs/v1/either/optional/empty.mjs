import { createKind } from '../../common/kind.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { optional } from './create.mjs';
import { eitherOptionalKind } from './base.mjs';

const eitherOptionalEmptyKind = createKind("either-optional-empty");
function optionalEmpty() {
    return eitherOptionalKind.setTo(eitherOptionalEmptyKind.setTo(left("optional", undefined)));
}
function isOptionalEmpty(input) {
    return isLeft(input)
        && eitherOptionalKind.has(input)
        && eitherOptionalEmptyKind.has(input);
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

export { eitherOptionalEmptyKind, isOptionalEmpty, optionalEmpty, whenIsOptionalEmpty };
