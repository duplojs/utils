import { createTheTime } from './createTheTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

function minTime(input) {
    return createTheTime(Math.min(...input.map(toTimeValue)));
}

export { minTime };
