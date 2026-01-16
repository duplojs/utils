import { createErrorKind } from './errorKindNamespace.mjs';
import { kindHeritage } from './kind.mjs';

class AssertsError extends kindHeritage("asserts-error", createErrorKind("asserts-error"), Error) {
    value;
    constructor(value) {
        super({}, ["Asserts Error."]);
        this.value = value;
    }
}
/**
 * {@include common/asserts/index.md}
 */
function asserts(input, predicate) {
    if (!predicate(input)) {
        throw new AssertsError(input);
    }
}

export { AssertsError, asserts };
