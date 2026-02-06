import { TheTime } from './theTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

/**
 * {@include date/maxTime/index.md}
 */
function maxTime(input) {
    return TheTime.new(Math.max(...input.map(toTimeValue)));
}

export { maxTime };
