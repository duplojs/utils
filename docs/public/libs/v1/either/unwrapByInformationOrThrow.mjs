import { unwrap } from '../common/unwrap.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';
import { kindClass } from '../common/kindClass.mjs';
import { hasInformation } from './hasInformation.mjs';

class HasNotInformationError extends kindClass(createErrorKind("has-not-information-error"), Error) {
    value;
    information;
    constructor(value, information) {
        super(undefined, `Value has not information "${information}".`);
        this.value = value;
        this.information = information;
    }
}
function unwrapByInformationOrThrow(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => unwrapByInformationOrThrow(input, information);
    }
    const [input, information] = args;
    if (hasInformation(input, information)) {
        return unwrap(input);
    }
    throw new HasNotInformationError(input, information);
}

export { HasNotInformationError, unwrapByInformationOrThrow };
