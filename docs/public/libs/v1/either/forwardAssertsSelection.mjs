import { kindClass } from '../common/kindClass.mjs';
import { informationKind } from './kind.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';

class ForwardAssertsSelectionError extends kindClass(createErrorKind("forward-asserts-selection-error"), Error) {
    value;
    selector;
    constructor(value, selector) {
        super(undefined, "Either information is not selected.");
        this.value = value;
        this.selector = selector;
    }
}
function forwardAssertsSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => forwardAssertsSelection(input, selector);
    }
    const [input, selector] = args;
    if (informationKind.has(input)
        && selector[informationKind.getValue(input)] !== true) {
        throw new ForwardAssertsSelectionError(input, selector);
    }
    return input;
}

export { ForwardAssertsSelectionError, forwardAssertsSelection };
