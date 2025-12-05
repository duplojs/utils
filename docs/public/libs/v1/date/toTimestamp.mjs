import { theDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';

class InvalidTheDateError extends kindHeritage("invalid-the-Date-error", createErrorKind("invalid-the-Date-error"), Error) {
    theDate;
    constructor(theDate) {
        super({}, ["TheDate is invalid."]);
        this.theDate = theDate;
    }
}
function toTimestamp(input) {
    const match = input.match(theDateRegex);
    if (!match) {
        throw new InvalidTheDateError(input);
    }
    const { value, sign } = match.groups;
    const timestamp = Number(sign === "-"
        ? `-${value}`
        : value);
    if (!isSafeTimestamp(timestamp)) {
        throw new InvalidTheDateError(input);
    }
    return timestamp;
}

export { InvalidTheDateError, toTimestamp };
