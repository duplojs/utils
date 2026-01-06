import { theDateRegex, theTimeRegex } from './constants.mjs';
import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';

class InvalidTheDateError extends kindHeritage("invalid-the-Date-error", createErrorKind("invalid-the-Date-error"), Error) {
    theDate;
    constructor(theDate) {
        super({}, ["TheDate is invalid."]);
        this.theDate = theDate;
    }
}

/**
 * {@include date/toTimestamp/index.md}
 */
function toTimestamp(input) {
    const match = input.startsWith("date")
        ? input.match(theDateRegex)
        : input.match(theTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimestamp };
