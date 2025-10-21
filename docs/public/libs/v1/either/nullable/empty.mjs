import { createKind } from '../../common/kind.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { left } from '../left/create.mjs';
import { isLeft } from '../left/is.mjs';
import { isRight } from '../right/is.mjs';
import { nullable } from './create.mjs';
import { eitherNullableKind } from './base.mjs';

const eitherNullableEmptyKind = createKind("either-nullable-empty");
function nullableEmpty() {
    return eitherNullableKind.addTo(eitherNullableEmptyKind.addTo(left("nullable", null)));
}
function isNullableEmpty(input) {
    return isLeft(input)
        && eitherNullableKind.has(input)
        && eitherNullableEmptyKind.has(input);
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

export { eitherNullableEmptyKind, isNullableEmpty, nullableEmpty, whenIsNullableEmpty };
