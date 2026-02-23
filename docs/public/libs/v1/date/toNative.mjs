import { TheDate } from './theDate.mjs';
import { TheTime } from './theTime.mjs';
import { toTimestamp } from './toTimestamp.mjs';
import { toTimeValue } from './toTimeValue.mjs';

function toNative(input) {
    if (input instanceof TheDate) {
        return input.toNative();
    }
    else if (input instanceof TheTime) {
        return input.toNative();
    }
    else if (input.startsWith("date")) {
        return new Date(toTimestamp(input));
    }
    else {
        return toTimeValue(input);
    }
}

export { toNative };
