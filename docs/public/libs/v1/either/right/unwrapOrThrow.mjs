import { unwrap } from '../../common/unwrap.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { kindClass } from '../../common/kindClass.mjs';
import { isRight } from './is.mjs';

class NotRightError extends kindClass(createErrorKind("not-right-error"), Error) {
    value;
    constructor(value) {
        super(undefined, "Value is not Right.");
        this.value = value;
    }
}
/**
 * {@include either/unwrapRightOrThrow/index.md}
 */
function unwrapRightOrThrow(input) {
    if (isRight(input)) {
        return unwrap(input);
    }
    throw new NotRightError(input);
}

export { NotRightError, unwrapRightOrThrow };
