import { theTimeRegex } from './constants.mjs';
import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';

function toTimeValue(input) {
    const match = input.match(theTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimeValue(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimeValue };
