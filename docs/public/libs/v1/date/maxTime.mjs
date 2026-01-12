import { createTheTime } from './createTheTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

/**
 * {@include date/maxTime/index.md}
 */
function maxTime(input) {
    return createTheTime(Math.max(...input.map(toTimeValue)));
}

export { maxTime };
