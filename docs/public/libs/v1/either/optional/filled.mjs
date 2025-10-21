import { createKind } from '../../common/kind.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { isLeft } from '../left/is.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { optional } from './create.mjs';
import { eitherOptionalKind } from './base.mjs';

const eitherOptionalFilledKind = createKind("either-optional-filled");
function optionalFilled(value) {
    return eitherOptionalKind.addTo(eitherOptionalFilledKind.addTo(right("optional", value)));
}
function isOptionalFilled(input) {
    return isRight(input)
        && eitherOptionalKind.has(input)
        && eitherOptionalFilledKind.has(input);
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

export { eitherOptionalFilledKind, isOptionalFilled, optionalFilled, whenIsOptionalFilled };
