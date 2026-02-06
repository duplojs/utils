import { toTimestamp } from './toTimestamp.mjs';
import { TheDate } from './theDate.mjs';

/**
 * {@include date/min/index.md}
 */
function min(input) {
    return TheDate.new(Math.min(...input.map(toTimestamp)));
}

export { min };
