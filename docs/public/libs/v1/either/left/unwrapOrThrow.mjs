import { unwrap } from '../../common/unwrap.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { kindClass } from '../../common/kindClass.mjs';
import { isLeft } from './is.mjs';

class NotLeftError extends kindClass(createErrorKind("not-left-error"), Error) {
    value;
    constructor(value) {
        super(undefined, "Value is not Left.");
        this.value = value;
    }
}
/**
 * {@include either/unwrapLeftOrThrow/index.md}
 */
function unwrapLeftOrThrow(input) {
    if (isLeft(input)) {
        return unwrap(input);
    }
    throw new NotLeftError(input);
}

export { NotLeftError, unwrapLeftOrThrow };
