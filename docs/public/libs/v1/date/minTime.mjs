import { TheTime } from './theTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

/**
 * {@include date/minTime/index.md}
 */
function minTime(input) {
    return TheTime.new(Math.min(...input.map(toTimeValue)));
}

export { minTime };
