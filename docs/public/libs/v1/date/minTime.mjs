import { createTheTime } from './createTheTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

/**
 * {@include date/minTime/index.md}
 */
function minTime(input) {
    return createTheTime(Math.min(...input.map(toTimeValue)));
}

export { minTime };
