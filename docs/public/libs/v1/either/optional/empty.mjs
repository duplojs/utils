import { createEitherKind } from '../kind.mjs';
import { eitherOptionalKind } from './base.mjs';
import { optional } from './create.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { isRight } from '../right/is.mjs';

const eitherOptionalEmptyKind = createEitherKind("optional-empty");
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
