import { createErrorKind } from '../common/errorKindNamespace.mjs';
import { kindClass } from '../common/kindClass.mjs';
import { informationKind } from './kind.mjs';
import { unwrap } from '../common/unwrap.mjs';

class HasNotSelectedInformationError extends kindClass(createErrorKind("has-not-selected-information-error"), Error) {
    value;
    selector;
    constructor(value, selector) {
        super(undefined, "Value information is not selected.");
        this.value = value;
        this.selector = selector;
    }
}
function unwrapSelectionOrThrow(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => unwrapSelectionOrThrow(input, selector);
    }
    const [input, selector] = args;
    if (informationKind.has(input)
        && selector[informationKind.getValue(input)] === true) {
        return unwrap(input);
    }
    throw new HasNotSelectedInformationError(input, selector);
}

export { HasNotSelectedInformationError, unwrapSelectionOrThrow };
