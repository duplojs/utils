import { kindHeritage } from '../common/kind.mjs';
import '../common/stringToBytes.mjs';
import '../common/stringToMillisecond.mjs';
import '../common/globalStore.mjs';
import '../common/builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';
import { theDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';
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
